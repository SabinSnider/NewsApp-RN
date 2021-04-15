import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {  } from "react-redux";

const DetailsScreen = ({route}) => {
  const newsContext = useContext(NewsContext);
  const getAllData = () => {
    newsContext.getNews();
    newsContext.getSources();
    newsContext.getHeadlines();
  };

  React.useEffect(() => {
    getAllData();
  }, []);


  return (
    <View>
        <Card>
        <Card.Title title={newsContext.allNews}/>
        <Card.Content>
          <Title> {newsContext}</Title>
          <Paragraph></Paragraph>
        </Card.Content>
      </Card> 
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
