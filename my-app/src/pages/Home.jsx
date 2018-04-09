import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import moment from 'moment';
import ScrollToTop from 'react-scroll-up';
import Navbar from '../components/Navbar.jsx';
import Loader from 'react-loader';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded:false,
            natifes:[],
            clas:[],
            arubianos:[],
            maintas:[],
            oras: [],
            boletins: [],
            posts: [],
            focuses:[],
            bondias:[],
            news:[],
            blekis:[],
            radios:[],
        }
    }
    componentDidMount() {
             const myHeaders = new Headers();
             myHeaders.append('pragma', 'no-cache');
             myHeaders.append('cache-control', 'no-cache');
             
             const myInit = {
                    method: 'GET',
                    headers: myHeaders,
                };
                Promise.all([
                fetch('https://cors-anywhere.herokuapp.com/https://arubanative.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        natifes: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.noticiacla.com%2Frss', myInit ).then((response) => response.json()).then(response => {
                    this.setState({
                        clas: response.items,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://earubianonews.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        arubianos: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://awemainta.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        maintas: response
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://24ora.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        oras: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://boletinextra.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        boletins: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://www.masnoticia.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        posts: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://www.diario.aw/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        news: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://focus.aw/index.php/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        focuses: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://batibleki.visitaruba.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        blekis: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://www.bondia.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        bondias: response,
                        loaded: true
                    })
                }),
                fetch('https://cors-anywhere.herokuapp.com/https://coolaruba.com/wp-json/wp/v2/posts?_embed', myInit).then((response) => response.json()).then(response => {
                    this.setState({
                        radios: response,
                        loaded: true
                    })
                })
      ]);
    }
    render() {
        // noticia cla
        let clas = this.state.clas.map((cla, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/noticiaCLa.PNG')} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <h3>{ReactHtmlParser(cla.title)}</h3>
                            <p className="card-text">{moment(cla.pubDate).format('L')}</p>
                            <p>{ReactHtmlParser(cla.description.substring(0, 250) + "...")}</p>
                            <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + cla.link}>read more</button>
                            <div className="text-muted">provider: noticiacla.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={cla.link} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={require('../images/noticiaCLa.PNG')} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(cla.title)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(cla.pubDate).format('L')}</p>
                                    <div>{ReactHtmlParser(sanitizeHtml(cla.content))}</div>
                                    <a href="https://noticiacla.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> noticiacla.com</a>
                                    <a href={cla.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        // e arubiano
        let arubianos = this.state.arubianos.map((arubiano, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/eArubiano.PNG')} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <h3>{ReactHtmlParser(arubiano.title.rendered)}</h3>
                            <p className="card-text">{moment(arubiano.date).format('L')}</p>
                            <p dangerouslySetInnerHTML={{ __html: arubiano.excerpt.rendered.substring(0, 250) + "..."}}></p>
                            <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + arubiano.id}>read more</button>
                            <div className="text-muted">provider: earubianonews.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={arubiano.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={require('../images/eArubiano.PNG')} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(arubiano.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(arubiano.date).format('L')}</p>
                                    {ReactHtmlParser(sanitizeHtml(arubiano.content.rendered))}
                                    <a href="https://earubianonews.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> earubianonews.com</a>
                                    <a href={arubiano.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //awe mainta
        let maintas = this.state.maintas.map((mainta, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={(!mainta._embedded['wp:featuredmedia'] || mainta._embedded['wp:featuredmedia'][0].code || mainta._embedded['wp:featuredmedia'][0].media_details.sizes.medium === undefined) ? require('../images/aweMainta.PNG') : mainta._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url } alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <h3>{ReactHtmlParser(mainta.title.rendered)}</h3>
                            <p className="card-text">{moment(mainta.date).format('L')}</p>
                            <p dangerouslySetInnerHTML={{ __html: mainta.excerpt.rendered }}></p>
                            <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + mainta.id}>read more</button>
                            <div className="text-muted">provider: awemainta.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={mainta.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={(!mainta._embedded['wp:featuredmedia'] || mainta._embedded['wp:featuredmedia'][0].code || mainta._embedded['wp:featuredmedia'][0].media_details.sizes.full === undefined) ? require('../images/aweMainta.PNG') : mainta._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(mainta.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(mainta.date).format('L')}</p>
                                    {ReactHtmlParser(sanitizeHtml(mainta.content.rendered))}
                                    <a href="https://awemainta.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> awemainta.com</a>
                                    <a href={mainta.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //boletin extra
        let boletins = this.state.boletins.map((boletin, index) => {
            return ( 
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/boletin.png')} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{ReactHtmlParser(boletin.title.rendered)}</h3>
                    <p className="card-text">{moment( boletin.date).format('L')}</p>
                    <p dangerouslySetInnerHTML={{ __html:  boletin.excerpt.rendered }}></p>
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + boletin.id}>read more</button>
                    <div className="text-muted">provider: boletinextra.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={boletin.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={require('../images/boletinHD.jpg')} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(boletin.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(boletin.date).format('L')}</p>
                                    <div>{ReactHtmlParser(sanitizeHtml(boletin.content.rendered, {
                                        allowedTags: ['p', 'em', 'strong', 'b', 'i']
                                    }))}</div>
                                    <a href="https://boletinextra.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> boletinextra.com</a>
                                    <a href={boletin.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //24ora
        let oras = this.state.oras.map((ora, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/24ora.jpg')} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{ReactHtmlParser(ora.title.rendered)}</h3>
                    <p className="card-text">{moment(ora.date).format('L')}</p>
                            <div>{(ora.excerpt.rendered === "<p>00</p>\n") ? 'Video' : ReactHtmlParser(ora.excerpt.rendered)}</div>
                            <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + ora.id}>read more</button>
                    <div className="text-muted">provider: 24ora.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={ora.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={require('../images/24ora.jpg')} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(ora.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(ora.date).format('L')}</p>
                                    <div>{ReactHtmlParser(sanitizeHtml(ora.content.rendered, {
                                        allowedTags: ['p', 'em', 'strong', 'b', 'i', 'span'],
                                        transformTags: {
                                            'span': function (tagName, attribs) {
                                                return {
                                                    tagName: 'span',
                                                    text: ' '
                                                };
                                            }
                                    }}))}</div>
                                    <a href="https://24ora.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> 24ora.com</a>
                                    <a href={ora.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //masnoticia
        let posts = this.state.posts.map((post, index) => {
            return (
                <div className="col-md-4" key={index}>
                 <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={(post._embedded['wp:featuredmedia'][0].code || post._embedded['wp:featuredmedia'][0].media_details.sizes.medium === undefined ) ?  require('../images/masnoticia.PNG') : post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url } alt="Thumbnail [100%x225]" />
                 <div className="card-body"> 
                 <h3>{ReactHtmlParser(post.title.rendered)}</h3>
                 <p className="card-text">{moment(post.date).format('L')}</p>
                 <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                 <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + post.id}>read more</button>
                 <div className="text-muted">provider: masnoticia.com</div>
                   </div>
                 </div>
                    <div className="modal fade" id={post.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={(post._embedded['wp:featuredmedia'][0].code || post._embedded['wp:featuredmedia'][0].media_details.sizes.full === undefined) ? require('../images/masnoticia.PNG') : post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(post.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(post.date).format('L')}</p>
                                    {ReactHtmlParser(sanitizeHtml(post.content.rendered))}
                                    <a href="https://masnoticia.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> masnoticia.com</a>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //diario
        let news = this.state.news.map((noticia, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={( !noticia._embedded['wp:featuredmedia'] || noticia._embedded['wp:featuredmedia'][0].code || noticia._embedded['wp:featuredmedia'][0].media_details.sizes.medium === undefined ) ? require('../images/diario.PNG') : noticia._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body"> 
                        <h3>{ReactHtmlParser(noticia.title.rendered)}</h3>
                        <p className="card-text">{moment(noticia.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: noticia.excerpt.rendered }}></p>
                        <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + noticia.id}>read more</button>
                        <div className="text-muted">provider: diario.aw</div>
                         </div>
                        </div>
                        <div className="modal fade" id={noticia.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img className="modal-header" src={(!noticia._embedded['wp:featuredmedia'] || noticia._embedded['wp:featuredmedia'][0].code || noticia._embedded['wp:featuredmedia'][0].media_details.sizes.full === undefined) ? require('../images/diario.PNG') : noticia._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(noticia.title.rendered)}</h3>
                                    </div>
                                    <div className="modal-body" >
                                        <p className="card-text">{moment(noticia.date).format('L')}</p>
                                        {ReactHtmlParser(sanitizeHtml(noticia.content.rendered))}
                                        <a href="https://diario.aw" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> diario.aw</a>
                                        <a href={noticia.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })
        //aruba native
        let natifes = this.state.natifes.map((native, index) => {
            return (
                <div className="col-md-4" key={index}>
                 <div className="card mb-4 box-shadow">
                     <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={(native._embedded['wp:featuredmedia'][0].code) ? require('../images/arubaNative.PNG') : native._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}  alt="Thumbnail [100%x225]" />
                    <div className="card-body"> 
                     <h3>{ReactHtmlParser(native.title.rendered)}</h3>
                     <p className="card-text">{moment(native.date).format('L')}</p>
                     <p dangerouslySetInnerHTML={{ __html: native.excerpt.rendered }}></p>
                     <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + native.id}>read more</button>
                     <div className="text-muted">provider: arubanative.com</div>
                    </div>
                 </div>
                    <div className="modal fade" id={native.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                     <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                           <div className="modal-header">
                           <img className="modal-header" src={(native._embedded['wp:featuredmedia'][0].code) ? require('../images/arubaNative.PNG') : native._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}  alt="Thumbnail [100%x225]" />
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                           </button>
                            <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(native.title.rendered)}</h3>
                        </div>
                        <div className="modal-body" >
                        <p className="card-text">{moment(native.date).format('L')}</p>
                                    {ReactHtmlParser(sanitizeHtml(native.content.rendered))}
                                    <a href="https://arubanative.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> arubanative.com</a>
                                    <a href={native.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">       
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                             </div>
                        </div>
                        </div>
                     </div>
                    </div>
                </div>
            )
        })
        //bon dia aruba
        let bondias = this.state.bondias.map((bondia, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={bondia._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <h3>{ReactHtmlParser(bondia.title.rendered)}</h3>
                            <p className="card-text">{moment(bondia.date).format('L')}</p>
                            <p dangerouslySetInnerHTML={{ __html: bondia.excerpt.rendered }}></p>
                            <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + bondia.id}>read more</button>
                            <div className="text-muted">provider: bondia.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={bondia.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={bondia._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(bondia.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(bondia.date).format('L')}</p>
                                    {ReactHtmlParser(sanitizeHtml(bondia.content.rendered))}
                                    <a href="https://www.bondia.com/" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> bondia.com</a>
                                    <a href={bondia.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //focus
        let focuses = this.state.focuses.map((focus, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={(focus._embedded['wp:featuredmedia'][0].code || focus._embedded['wp:featuredmedia'][0].media_details.sizes.medium === undefined) ? require('../images/focus.PNG') : focus._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                        <h3>{ReactHtmlParser(focus.title.rendered)}</h3>
                        <p className="card-text">{moment(focus.date).format('L')}</p>
                        <p dangerouslySetInnerHTML={{ __html: focus.excerpt.rendered }}></p>
                        <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + focus.id}>read more</button>
                        <div className="text-muted">provider: focus.aw</div>
                            </div>
                        </div>
                        <div className="modal fade" id={focus.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img className="modal-header" src={(focus._embedded['wp:featuredmedia'][0].code || focus._embedded['wp:featuredmedia'][0].media_details.sizes.full === undefined) ? require('../images/focus.PNG') : focus._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(focus.title.rendered)}</h3>
                                    </div>
                                    <div className="modal-body" >
                                        <p className="card-text">{moment(focus.date).format('L')}</p>
                                        <div>{ReactHtmlParser(sanitizeHtml(focus.content.rendered, {
                                            allowedAttributes: { 'iframe': ['src'] },
                                            allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com']
                                        }))}</div>
                                        <a href="https://focus.aw" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> focus.aw</a>
                                        <a href={focus.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        //bati bleki    
        let blekis = this.state.blekis.map((bleki, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={require('../images/batiBleki.PNG')} alt="Thumbnail [100%x225]" />
                        <div className="card-body">
                            <h3>{ReactHtmlParser(bleki.title.rendered)}</h3>
                            <p className="card-text">{moment(bleki.date).format('L')}</p>
                            <p dangerouslySetInnerHTML={{ __html: bleki.excerpt.rendered.substring(0, 250) + "..."}}></p>
                            <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + bleki.id}>read more</button>
                            <div className="text-muted">provider: batibleki.visitaruba.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={bleki.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={(!bleki._embedded['wp:featuredmedia'] || bleki._embedded['wp:featuredmedia'][0].code) ? require('../images/batiBlekiHD.PNG') : bleki._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(bleki.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(bleki.date).format('L')}</p>
                                    {ReactHtmlParser(sanitizeHtml(bleki.content.rendered))}
                                    <a href="https://batibleki.visitaruba.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> batibleki.visitaruba.com</a>
                                    <a href={bleki.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        //coolaruba
        let radios = this.state.radios.map((radio, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={radio._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Thumbnail [100%x225]" />
                    <div className="card-body">
                    <h3>{ReactHtmlParser(radio.title.rendered)}</h3>
                    <p className="card-text">{moment(radio.date).format('L')}</p>
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + radio.id}>read more</button>
                    <div className="text-muted">provider: coolaruba.com</div>
                        </div>
                    </div>
                    <div className="modal fade" id={radio.id} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <img className="modal-header" src={radio._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Thumbnail [100%x225]" />
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(radio.title.rendered)}</h3>
                                </div>
                                <div className="modal-body" >
                                    <p className="card-text">{moment(radio.date).format('L')}</p>
                                    <div>{ReactHtmlParser(sanitizeHtml(radio.content.rendered, {
                                        allowedTags: ['p', 'em', 'strong', 'b', 'i']
                                    }))}</div>
                                    <a href="https://coolaruba.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> coolaruba.com</a>
                                    <a href={radio.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        const data = [
             natifes,
             posts, 
             clas, 
             boletins, 
             bondias, 
             news, 
             arubianos, 
             maintas, 
             focuses, 
             oras, 
             blekis, 
             radios
        ]
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
                <ScrollToTop style={{ "zIndex": '1' }} showUnder={160}>
                    <span><i className="arrow fa fa-arrow-circle-up fa-3x"></i></span>
                    </ScrollToTop>
                    <div className="container">
                    <Loader loaded={this.state.loaded}>
                    <div className="row">
                        {data}
                    </div>    
                    </Loader>
                    <p className="lead font-weight-normal">
                        It is with great pleasure that we proudly present to you our solution for the island of <b>Aruba</b> regarding online news.<br /><br/>
                        This web app allows you to see all the latest news from all online news providers from the island.
                        Instead of going on news sites one by one or finding out about the news on Facebook or other social media,
                        we created a one page website that gathers all news from all news providers.
                        We are currently displaying the latest 10 news articles from each news provider. <i className="text-muted">#stayinformed</i>
                    </p>
                 </div>
                <footer className="container">
                    <div className="text-center text-muted"><p>© 2018 made by</p><a href="https://sitelift.nl" target="_blank" rel="noopener noreferrer">Site Lift NL</a></div>
                </footer>
            </div>
        );
    }
}
export default Home;