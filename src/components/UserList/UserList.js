import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import { graphql } from 'react-apollo';

import { ghDevelopers, DEV_LIST_QUERY } from '../../helpers/userList';

import styles from './styles';

export const UserList = ({ data, error, navigation: { navigate } }) => {
  const {search} =  data;
  const list = ghDevelopers(search);
  return !list.length ? (
    <View style={{ flex: 1, paddingTop: 20 }}>
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
            onPress={() => navigate('UserInfo', { item: item })}
          >
            <View style={styles.list}>
              <View style={styles.image}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 80 / 2,
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


export default graphql(DEV_LIST_QUERY, {options: (props) => {
  return({
  variables: {
    location:`location:${props.location}  ${props.username && `user:${props.username}`}`
  },
  fetchPolicy: 'no-cache', 
  errorPolicy: 'all'

})}
})(UserList);