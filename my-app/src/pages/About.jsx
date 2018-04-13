import React, { Component } from 'react';
import moment from 'moment';
import Navbar from '../components/Navbar.jsx';
import Loader from 'react-loader';
import ScrollToTop from 'react-scroll-up';

class About extends Component {

    constructor() {
        super();
        this.state = {
            loaded: false,
            boletins: [],
            instagrams: [],
            twitters:[],
        }
    }
    componentDidMount() {
        Promise.all([
            fetch('https://sitelift.nl/wp-json/wp/v2/posts?_embed').then((response) => response.json()).then(response => {
                this.setState({
                    boletins: response,
                    loaded: true
                })
            }),
            fetch('https://cors-anywhere.herokuapp.com/https://publish.twitter.com/oembed?url=https://twitter.com/arubapage/status/977901243275403265').then((response) => response.json()).then(response => {
                this.setState({
                    twitters: [response],
                    loaded: true
                })
            }),
            fetch('https://api.instagram.com/oembed/?url=http://instagr.am/p/Bgoyxryg-eD/').then((response) => response.json()).then(response => {
                this.setState({
                    instagrams: [response],
                    loaded: true
                })
            })
        ]);
    }

    render() {
        let boletins = this.state.boletins.map((boletin, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={boletin._embedded['wp:featuredmedia'][0].source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <h3>{boletin.title.rendered}</h3>
                            <p className="card-text">{moment(boletin.date).format('L')}</p>
                            <p>It’s finally here, Aruba page dot com! It is with great pleasure that we proudly present to you our solution for the island of Aruba regarding online news. This web app allows you to see all the latest news.</p>
                            <a className="btn btn-lg btn-primary" href={boletin.link} target="_blank">read more</a>
                            <div className="text-muted">provider: sitelift.nl</div>
                        </div>
                    </div>
                </div>
            )
        })
        let instagrams = this.state.instagrams.map((instagram, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={instagram.thumbnail_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <p>{instagram.title}</p>
                            <a className="btn btn-lg btn-primary" href={instagram.author_url} target="_blank">Go to Instagram page</a>
                            <div className="text-muted">provider: @arubapage</div>
                        </div>
                    </div>
                </div>
            )
        })
        let twitters = this.state.twitters.map((twitter, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/twitterPage.PNG')} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <p dangerouslySetInnerHTML={{ __html: twitter.html }}></p>
                            <a className="btn btn-lg btn-primary" href={twitter.author_url} target="_blank">Go to @arubapage on Twitter</a>
                            <div className="text-muted">provider: @arubapage</div>
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
                    <h1 className="jumbotron-heading">About ArubaPage.com</h1>
                    <p className="lead text-muted">One Happy Island, One well informed Aruban.</p>
                    <ScrollToTop style={{ "zIndex": '1' }} showUnder={160}>
                        <span><i className="arrow fa fa-arrow-circle-up fa-3x"></i></span>
                    </ScrollToTop>
                    <p className="lead font-weight-normal">

                    Aruba page dot com was launched on the 18th of March 2018 and was created by Site Lift NL.<br/><br/>
                    The idea started when one frustrated and unhappy Aruban had to bookmark all news providers 
                    and daily opening them one by one to read the latest news. Knowing that Aruba is a one happy Island, this 
                    Aruban was determined to remove the hassle to get the latest news articles from each news provider and be happy with not having to open
                    all those tabs on his browser again.<br/><br/>

                    Thus Aruba page was created and launched on Aruba's national anthem and flag day.
                    Keeping in mind that Aruba Page is still brand new, there is going to be allot of new features added to the page so we can 
                    optimize the site for better user experience.<br /><br/>

                    So far we had a few really interesting feedback from our users. Your feedback is important to us, so feel free to reach us on Facebook, Twitter, Instagram or simply send us an email at: info@arubapage.com 
                    
                    </p>
                </div>
            </section>
        </div>
        <div className="container">
        <Loader loaded={this.state.loaded}>
            <div className="row">
                {boletins}
                {instagrams}
                {twitters}
            </div>
        </Loader>    
        </div>
        <footer className="container">
            <div className="text-center text-muted"><p>© 2018 made by</p><a href="https://sitelift.nl" target="_blank" rel="noopener noreferrer">Site Lift NL</a></div>
        </footer>
    </div>
);
    }
}

export default About;