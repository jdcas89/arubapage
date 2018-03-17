import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import moment from 'moment';
import ora from '../images/24ora.jpg' ;
import logo from '../images/logo.svg';
import Navbar from '../components/Navbar.jsx';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            oras: [],
            boletins: [],
            posts: [],
            articles:[],
            focuses:[],
            news:[],
            tvs:[],
            radios:[]

        }
    }
    componentDidMount() {
        Promise.all([
            fetch('http://24ora.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    oras: response
                })
            }),
            fetch('http://boletinextra.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    boletins: response
                })
            }),
            fetch('https://masnoticia.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    posts: response
                })
            }),
            fetch('http://www.bondia.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    articles: response
                })
            }),
            fetch('http://www.diario.aw/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    news: response
                })
            }),
            fetch('https://www.focus.aw/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    focuses: response
                })
            }),
            fetch('http://www.telearuba.aw/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    tvs: response
                })
            }),
            fetch('http://coolaruba.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    radios: response
                })
            })
      ]);
    }
    render() {
        let boletins = this.state.boletins.map(( boletin, index) => {
            return ( 
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/boletin.png')} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{ boletin.title.rendered}</h3>
                    <p className="card-text">{moment( boletin.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html:  boletin.excerpt.rendered }}></p>
                    <a href={ boletin.link} target="_blank">read more</a>
                    <div>provider: <a href="https://boletinextra.com">boletinextra.com</a></div>
                        </div>
                    </div>
                </div>
            )
        })
        let oras = this.state.oras.map((ora, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/24ora.jpg')} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{ora.title.rendered}</h3>
                    <p className="card-text">{moment(ora.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: ora.excerpt.rendered }}></p>
                    <a href={ora.link} target="_blank">read more</a>
                    <div>provider: <a href="https://24ora.com">24ora.com</a></div>
                        </div>
                    </div>
                </div>
            )
        })
        let posts = this.state.posts.map((post, index) => {
            return (
                <div className="col-md-4" key={index}>
                 <div className="card mb-4 box-shadow">
                  <div>provider: <a href="https://masnoticia.com">masnoticia.com</a></div>
                   <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                   <div className="card-body"> 
                     <h3>{post.title.rendered}</h3>
                     <p className="card-text">{moment(post.date).format('L')}</p>
                     <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                     <a href={post.link} target="_blank">read more</a>
                   </div>
                 </div>
                </div>
            )
        })
        let articles = this.state.articles.map((article, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                    <div className="card-body"> 
                    <h3>{article.title.rendered}</h3>
                    <p className="card-text">{moment(article.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></p>
                    <a href={article.link} target="_blank">read more</a>
                    <div>provider: <a href="http://bondia.com">bondia.com</a></div>
                     </div>
                    </div>
                </div>
            )
        })
            let news = this.state.news.map((noticia, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={noticia._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body"> 
                        <h3>{noticia.title.rendered}</h3>
                        <p className="card-text">{moment(noticia.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: noticia.excerpt.rendered }}></p>
                        <a href={noticia.link} target="_blank">read more</a>
                        <div>provider: <a href="http://diario.aw">diario.aw</a></div>
                         </div>
                        </div>
                    </div>
                )
            })
            let focuses = this.state.focuses.map((focus, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={focus._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                        <h3>{focus.title.rendered}</h3>
                        <p className="card-text">{moment(focus.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: focus.excerpt.rendered }}></p>
                        <a href={focus.link} target="_blank">read more</a>
                        <div>provider: <a href="http://focus.com">focus.aw</a></div>
                            </div>
                        </div>
                    </div>
                )
            })
            let tvs = this.state.tvs.map((tv, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 box-shadow">
                            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={tv._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                            <div className="card-body">
                            <h3>{tv.title.rendered}</h3>
                            <p className="card-text">{moment(tv.date).format('L')}</p>
                            <p dangerouslySetInnerHTML={{ __html: tv.excerpt.rendered }}></p>
                            <a href={tv.link} target="_blank">read more</a>
                            <div>provider: <a href="http://www.telearuba.aw">telearuba.aw</a></div>
                                </div>
                            </div>
                        </div>
                    )
        })
        let radios = this.state.radios.map((radio, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={radio._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{radio.title.rendered}</h3>
                    <p className="card-text">{moment(radio.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: radio.excerpt.rendered }}></p>
                    <a href={radio.link} target="_blank">read more</a>
                    <div>provider: <a href="http://www.coolaruba.com">coolaruba.com</a></div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
             <Navbar />
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Welcome to ArubaPage.com</h1>
                        <p className="lead text-muted">One Happy Island, One well informed Aruban.</p>
                    </div>
                </section>
             <div className="container">
              <div className="row">
              {posts}
              {articles}
              {oras}
              {boletins}
              {focuses}
              {news}
              {tvs}
              {radios}
              </div>    
             </div>
            </div>
        );
    }
}

export default Home;