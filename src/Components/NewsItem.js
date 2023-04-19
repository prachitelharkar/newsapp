import React from 'react'

const NewsItem=(props)=> {
    let { title, description, imageurl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right:'0'
          }}>
          <span className=" badge rounded-pill bg-danger" > {source} </span>
          </div>
          <img src={!imageurl ? "https://gumlet.assettype.com/swarajya%2F2022-12%2Feeb361b4-e842-436f-a4cf-c09f59e298f9%2FSwarajya_images__4_.png?w=1200&auto=format%2Ccompress&ogImage=true" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>      </div>
    )
  }


export default NewsItem
