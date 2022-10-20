import React, { Component } from 'react'
import './Newscomp.css'
export default class Newscomp extends Component {

    render() {
        let { title, description, imageurl, newsurl } = this.props;
        return (
            <>
                <div className="content">
                    <div className="content-right">
                        <img src={imageurl} alt="Data science" />
                    </div>
                    <div className="content-left">
                        <h1>{title}...</h1>
                        <p>{description}...</p>
                        <a href={newsurl} target="_blank">Read More</a>
                    </div>

                </div>
            </>
        )
    }
}
