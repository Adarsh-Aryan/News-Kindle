import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component"
import PropTypes from 'prop-types'
import Loader from "react-loader-spinner"


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,

    }

    capitalizeFirstLetter = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            articles: [],
            loading: true,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Kindle`
    }

    async componentDidMount() {

        this.props.updateProgress(10)
        let urlBase = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`
        let newsRes = await fetch(urlBase)
        this.props.updateProgress(30)
        let newsDetail = await newsRes.json()
        this.props.updateProgress(60)

        this.setState({

            articles: newsDetail.articles,
            totalResults: newsDetail.totalResults,
            loading: false
        })
        this.props.updateProgress(100)

    }



    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })


        let urlBase = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`
        let newsRes = await fetch(urlBase)
        let newsDetail = await newsRes.json()

        this.setState({
            loading: false,
            articles: this.state.articles.concat(newsDetail.articles),
            totalResults: newsDetail.totalResults
        })


    }
    render() {



        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{ marginTop: '70px' }}>News Kindle for {this.capitalizeFirstLetter(this.props.category)}</h1>

                {this.state.loading && <div className='text-center my-3'> <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}


                /> </div>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    style={{ overflow: 'hidden' }}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<div className='text-center my-3'> <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}


                    /> </div>}
                >
                    <div className="row" style={{ justifyContent: "center" }}>
                        {this.state.articles.map((element) => {
                            return <NewsItem newsTitle={element.title} newsDesc={element.description} imgUrl={element.urlToImage} key={element.url} newsUrl={element.url} author={element.author} publish={element.publishedAt} sourceName={element.source.name} />
                        })}
                    </div>
                </InfiniteScroll>




            </div>
        )
    }
}

export default News
