import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import NewsContext from '../store/contexts/NewsContext';
import {ListItem} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = props => {
  const newsContext = useContext(NewsContext);
  //console.log('headings', newsContext);
  const getAllData = () => {
    newsContext.getNews();
    newsContext.getSources();
    newsContext.getHeadlines();
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  return (
    <View style={styles.Screen}>
      {/* <FlatList
        horizontal = true
        data={newsContext.allNews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() =>{ navigation.navigate('Details\, {data: item})}}>
            <Text>{item.source.name}</Text>
          </View>
        )}
        // <View onPress= {() => {newsContext.setNewsDetail(item)
        //props.navigation.navigate('DetailsScreen')}}
        keyExtrator={(item, i) => i.toString()}
        ListEmptyComponent={() => <Text>Loading</Text>}></FlatList> */}
      {/* ListEmptyComponent le suru ma loading bhako text/icon dekauxa */}

      <ScrollView>
        {newsContext.headLines.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              newsContext.setNewsDetail(item);
              props.navigation.navigate('Detail');
            }}>
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <Image
              style={styles.image}
              source={{uri:item.urlToImage}}
                    />

          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
