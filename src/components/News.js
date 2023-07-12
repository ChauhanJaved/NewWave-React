import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
    category: "general",
    apiKey: process.env.REACT_APP_NEWS_API
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };
  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalResults) {
      this.setState({ hasMore: false });
      return;
    }        
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    });
  };
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  async updateNews() {
    this.props.setProgress(10);    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);    
    let parsedData = await data.json();    
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      hasMore: true,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}- NewsWave`;
  }
  async componentDidMount() {    
    this.updateNews();
  }
  render() {
    return (
      <>        
        <div className="text-center mb-4 mt-4">
          <h2>
            NewsWave: Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>
        </div>
        <div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="container my-3">
              <div className="row">
                
                {this.state.articles.map((element) => {
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
}
