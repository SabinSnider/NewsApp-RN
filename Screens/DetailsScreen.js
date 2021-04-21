import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import NewsContext from '../store/contexts/NewsContext';

const DetailsScreen = ({route}) => {
  const newsContext = useContext(NewsContext);
  const getAllData = () => {
    newsContext.getNews();
    newsContext.getSources();
    newsContext.getHeadlines();
  };
  console.log(newsContext);
  React.useEffect(() => {
    // getAllData();
  }, []);

  return (
    <View>
      <Card>
        <Card.Title />
        <Card.Content>
          <Title> {newsContext.newsDetail.title}</Title>
          <Paragraph></Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
