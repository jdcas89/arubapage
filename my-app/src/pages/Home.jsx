import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
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
            natifes:[],
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
            fetch('http://www.masnoticia.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
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
            fetch('https://focus.aw/index.php/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    focuses: response
                })
            }),
            fetch('https://arubanative.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    natifes: response
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
        let boletins = this.state.boletins.map((boletin, index) => {
            return ( 
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/boletin.png')} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{ReactHtmlParser(boletin.title.rendered)}</h3>
                    <p className="card-text">{moment( boletin.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html:  boletin.excerpt.rendered }}></p>
                    <a className="btn btn-lg btn-primary" href={ boletin.link} target="_blank">read more</a>
                    <div className="text-muted">provider: boletinextra.com</div>
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
                    <h3>{ReactHtmlParser(ora.title.rendered)}</h3>
                    <p className="card-text">{moment(ora.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: ora.excerpt.rendered }}></p>
                    <a className="btn btn-lg btn-primary" href={ora.link} target="_blank">read more</a>
                    <div className="text-muted">provider: 24ora.com</div>
                        </div>
                    </div>
                </div>
            )
        })
        let posts = this.state.posts.map((post, index) => {
            return (
                <div className="col-md-4" key={index}>
                 <div className="card mb-4 box-shadow">
                 <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={ !undefined ? post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url : require('../images/masnoticia.PNG') } alt="Thumbnail [100%x225]" />
                 <div className="card-body"> 
                 <h3>{ReactHtmlParser(post.title.rendered)}</h3>
                 <p className="card-text">{moment(post.date).format('L')}</p>
                 <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                 <a className="btn btn-lg btn-primary" href={post.link} target="_blank">read more</a>
                 <div className="text-muted">provider: masnoticia.com</div>
                   </div>
                 </div>
                </div>
            )
        })
        let articles = this.state.articles.map((article, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={article._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                    <div className="card-body"> 
                    <h3>{ReactHtmlParser(article.title.rendered)}</h3>
                    <p className="card-text">{moment(article.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></p>
                    <a className="btn btn-lg btn-primary" href={article.link} target="_blank">read more</a>
                    <div className="text-muted">provider: bondia.com</div>
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
                        <h3>{ReactHtmlParser(noticia.title.rendered)}</h3>
                        <p className="card-text">{moment(noticia.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: noticia.excerpt.rendered }}></p>
                        <a className="btn btn-lg btn-primary" href={noticia.link} target="_blank">read more</a>
                        <div className="text-muted">provider: diario.aw</div>
                         </div>
                        </div>
                    </div>
                )
        })
            let natifes = this.state.natifes.map((native, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={native._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body"> 
                        <h3>{ReactHtmlParser(native.title.rendered)}</h3>
                        <p className="card-text">{moment(native.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: native.excerpt.rendered }}></p>
                        <a className="btn btn-lg btn-primary" href={native.link} target="_blank">read more</a>
                        <div className="text-muted">provider: arubanative.com</div>
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
                        <h3>{ReactHtmlParser(focus.title.rendered)}</h3>
                        <p className="card-text">{moment(focus.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: focus.excerpt.rendered }}></p>
                        <a className="btn btn-lg btn-primary" href={focus.link} target="_blank">read more</a>
                        <div className="text-muted">provider: focus.aw</div>
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
                            <h3>{ReactHtmlParser(tv.title.rendered)}</h3>
                            <p className="card-text">{moment(tv.date).format('L')}</p>
                            <p dangerouslySetInnerHTML={{ __html: tv.excerpt.rendered }}></p>
                            <a className="btn btn-lg btn-primary" href={tv.link} target="_blank">read more</a>
                            <div className="text-muted">provider: telearuba.aw</div>
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
                    <h3>{ReactHtmlParser(radio.title.rendered)}</h3>
                    <p className="card-text">{moment(radio.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: radio.excerpt.rendered }}></p>
                    <a className="btn btn-lg btn-primary" href={radio.link} target="_blank">read more</a>
                    <div className="text-muted">provider: coolaruba.com</div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
             <Navbar />
             <div className="jumbotron">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Welcome to ArubaPage.com</h1>
                        <p className="lead text-muted">One Happy Island, One well informed Aruban.</p>
                    </div>
                </section>
            </div>
             <div className="container">
              <div className="row">
              {natifes}
              {articles}
              {focuses}
              {boletins}
              {posts}
              {news}
              {oras}
              {tvs}
              {radios}
              </div>    
             </div>
                <footer class="container">
                    <div className="text-center text-muted"><p>© 2018 made by</p><a href="https://sitelift.nl" target="_blank">Site Lift NL</a></div>
                </footer>
            </div>
        );
    }
}

export default Home;