import NewsContext from '../contexts/NewsContext';
import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
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
    try {
      const response = await axios.get(
        //`https://newsapi.org/v2/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
        `${BASE_URL}/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
      );
      //console.log(response);
      this.setState({
        ...this.state,
        allNews: response.data.articles,
      });
    } catch (error) {
      console.log(error);
    }

    // console.log(response.data.title);
  };
  getSourcesFromAPI = async () => {
    try {
      const response = await axios.get(
        //`https://newsapi.org/v2/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
        `${BASE_URL}/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
      );
      //console.log(response.data);
      this.setState({
        ...this.state,
        sources: response.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getHeadlinesFromAPI = async () => {
    try {
      const response = await axios.get(
        //`https://newsapi.org/v2/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
        `${BASE_URL}/everything?q=bitcoin&apiKey=4968101816aa4e7997ed4be80b9c82b2`,
      );
      //console.log('headlines',response.data);
      this.setState({
        ...this.state,
        headLines: response.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
