import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    let postsURL = "http://diario.aw/wp-json/wp/v2/posts?_embed";
    fetch(postsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }
  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.title.rendered}</h3>
          <p>{moment(post.date).format('L')}</p>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
          <a href={post.link} target="_blank">read more</a>
           <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="news article" />
        </div>
      )
    })
    return (
      <div className="App">
        <h1>News</h1>
        {posts}
      </div>
    );
  }
}

export default App;
