import React, { Component } from 'react'
import dummy from "./dummy.jpg"


export class NewsItem extends Component {

    render() {
        let { newsTitle, newsDesc, imgUrl, newsUrl, author, publish,sourceName} = this.props
        return (


            <div className="card col-md-4 mx-4 my-4" style={{ width: "18rem", padding: "0px" }} >
                <span className="badge bg-danger">{sourceName}</span>
                <img src={!imgUrl ? dummy : imgUrl} className="card-img-top" alt="newsImage" />
                <div className="card-body">
                    <h5 className="card-title">{newsTitle}</h5>
                    <p className="card-text">{newsDesc}</p>
                    <p className="card-text">By {!author ? "Author Not found" : author}: Latest By {new Date(publish).toUTCString()}</p>
                    <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary" target="_blank">Read More</a>
                </div>
            </div>

        )
    }
}

export default NewsItem
