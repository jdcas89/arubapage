import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import moment from 'moment';
import Navbar from '../components/Navbar.jsx';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            articles:[]

        }
    }
    componentDidMount() {
        Promise.all([
            fetch('https://masnoticia.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    posts: response
                })
            }),
            fetch('http://24ora.com/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    articles: response
                })
            })
      ]);
    }
    render() {
        let posts = this.state.posts.map((post, index) => {
            return (
                <div className="col-md-4" key={index}>
                 <div className="card mb-4 box-shadow">
                  <div>provider: <a href="https://masnoticia.com">masnoticia.com</a></div>
                   <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="news article" />
                    <h3>{post.title.rendered}</h3>
                    <p>{moment(post.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                    <a href={post.link} target="_blank">read more</a>
                 </div>
                </div>
            )
        })
        let articles = this.state.articles.map((article, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <div>provider: <a href="https://24ora.com">24ora.com</a></div>
                        <img src={article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="news article" />
                        <h3>{article.title.rendered}</h3>
                        <p>{moment(article.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></p>
                        <a href={article.link} target="_blank">read more</a>
                    </div>
                </div>
            )
        })
        return (
            <div>
             <Navbar />
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Welcome to Aruba Page</h1>
                        <p className="lead text-muted">One Happy Island, One well informed Aruban.</p>
                    </div>
                </section>
             <div className="container">
              <div className="row">
                {posts}
                {articles}
              </div>    
             </div>
            </div>
        );
    }
}

export default Home;