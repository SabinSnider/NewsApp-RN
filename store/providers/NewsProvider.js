import NewsContext from '../contexts/NewsContext';
import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';
const API_kEY = '4968101816aa4e7997ed4be80b9c82b2';

class NewsProvider extends React.Component {
  state = {
    allNews: [],
    headLines: [],
    sources: [],
    newsDetail: {},
  };
  // char wota state change garni char wota function xa

  getNewsFromAPI = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
      //`$(BASE_URL)everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
    );
    console.log(response.data.articles);
    this.setState({
      ...this.state,
      allNews: response.data.articles,
    });
  };
  getSourcesFromAPI = () => {};
  getHeadlinesFromAPI = () => {};

  setNewsDetail = news => {
    this.setState({
      ...this.state,
      newsDetail: {name: 'test'},
    });
  };
  render() {
    return (
      <NewsContext.Provider
        value={{
          ...this.state,
          getNews: this.getNewsFromAPI,
          getSources: this.getSourcesFromAPI,
          getHeadlines: this.getHeadlinesFromAPI,
          setNewsDetail: this.setNewsDetail,
        }}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}
export default NewsProvider;
