import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    if (articles.length >= totalResults) {
      setHasMore(false);
      return;
    }
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);    
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}- NewsWave`;
    updateNews()
  },[])

  return (
    <>
      <div className="text-center" style={{marginTop: '90px'}}>
        <h2>NewsWave: Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      </div>
      <div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container my-3">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage ? element.urlToImage : ""}
                      newsUrl={element.url ? element.url : ""}
                      author={element.author ? element.author : ""}
                      date={element.publishedAt ? element.publishedAt : ""}
                      source={element.source.name ? element.source.name : ""}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
News.defaultProps = {
  pageSize: 8,
  country: "in",
  category: "general",
  apiKey: process.env.REACT_APP_NEWS_API,
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};
