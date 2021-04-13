import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import NewsContext from '../store/contexts/NewsContext';
const HomeScreen = props => {
  const newsContext = useContext(NewsContext);
  //   console.log(newsContext);
  const getAllData = () => {
    newsContext.getNews();
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  // console.log(newsContext.allNews);
  return (
    <View style={styles.Screen}>
      <FlatList
        data={newsContext.allNews}
        renderItem={({item}) => <Text>{item.source.name}</Text>}
        keyExtrator={(item, i) => i.toString()}
        ListEmptyComponent={() => <Text>Loading</Text>}></FlatList>
      {/* ListEmptyComponent le suru ma loading bhako text/icon dekauxa */}
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
