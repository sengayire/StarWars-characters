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

export default graphql(DEV_LIST_QUERY)(ListScreen);