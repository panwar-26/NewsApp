import React, { Component } from 'react'

const Newsitem = (props)=> {
      let {title,description,imgurl,newsurl,time,day,author} = props;
    return (
        <div className="container">
            <div className="container">
                <div className="card border-primary">
                    <img src={imgurl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} className="btn btn-sm btn-primary" target="_blank" >Read Full</a>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unkonwn"} at {day} {time}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )

  }

export default Newsitem



