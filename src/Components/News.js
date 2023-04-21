import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  // eslint-disable-next-line
  const [totalResults, settotalResults] = useState(0)
  // eslint-disable-next-line

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

  const  updateNews=async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=363cc6e8a9d24f7ca0f2eccd861df74f&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);

  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsTime`;
    updateNews();
    //eslint-disable-next-line
  }, [])
    return (
  <>
       <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsTime - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
       {loading && <Spinner />}

          <div className="container">
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </div>
      </>
    )
  }

News.defaultProps = {
  country: 'in ',
  pageSize: 8,
  category: 'general',
}
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
}

export default News
