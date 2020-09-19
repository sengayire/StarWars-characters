import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { graphql } from 'react-apollo';
import { ghDevelopers, DEV_LIST_QUERY } from '../../helpers/userList';

export const ListScreen = ({ data, navigation: { navigate } }) => {
   const {search} =  data;
  const list = ghDevelopers(search);
  console.log('data',data);
  return !list.length ? (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="black" />
    </View>
  ) : (
    <View testID={'listView'} style={styles.container}>
      <FlatList
        style={styles.listContainer}
        keyExtractor={list => list.id}
        data={list}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            testID="flatList"
            onPress={() => navigate('DevProfile', { item: item })}
          >
            <View style={styles.list}>
              <View style={styles.image}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2
                  }}
                  source={{
                    uri: item.image
                  }}
                />
              </View>
              <View style={styles.details}>
                <Text style={styles.name}>{item.name || item.username}</Text>
                <Text style={styles.username}>@{item.username}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default graphql(DEV_LIST_QUERY)(ListScreen);