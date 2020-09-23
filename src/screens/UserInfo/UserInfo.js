import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity, SafeAreaView } from 'react-native';

import backArrowBlack from '../../../assets/backArrowBlack.png';
import {shareUserProfile} from '../../helpers';
import styles from './styles';

const UserInfo = ({navigation, route: {params: {item}}}) => {
  
    const {
      image,
      followers,
      following,
      name,
      username,
      repositories,
      url,
      stars,
    } = item;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{width: '100%'}}>
        <View style={{ paddingLeft: 20, paddingTop: 20}}>
         <TouchableOpacity style={{width: 30}} onPress={() => navigation.goBack()} >
         <Image  source={backArrowBlack} style={{width:22, height:20}}/>
        </TouchableOpacity>
       </View>
        </SafeAreaView>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.names}>{name}</Text>
        <View style={styles.shareProfile}>
          <Text style={styles.username}>@{username}</Text>
          <TouchableOpacity onPress={() => shareUserProfile(username, url)}>
            <Image
              source={require('../../../assets/shareButton.png')}
              style={{
                width: 25,
                height: 25,
                marginTop: 8,
                marginLeft: 10 
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.follow}>
          <View>
            <Text style={styles.text}> Followers</Text>
            <Text style={styles.followCount}>{followers.totalCount}</Text>
          </View>
          <View>
            <Text style={styles.text}> Following</Text>
            <Text style={styles.followCount}>{following.totalCount}</Text>
          </View>
          <View>
            <Text style={styles.text}> Stars</Text>
            <Text style={styles.followCount}> {stars.totalCount}</Text>
          </View>
        </View>
        <View style={styles.repoContainer}>
          <Text style={styles.repo}>
            Repositories:
            <Text style={styles.repoCount}> {repositories.totalCount}</Text>
          </Text>
          <Text style={styles.url}>
            URL:
            <Text
              testId="profile"
              style={styles.urlLink}
              onPress={() => Linking.openURL(url)}
            >
              {url}
            </Text>{' '}
          </Text>
        </View>
      </View>
    );
  }

export default UserInfo;
