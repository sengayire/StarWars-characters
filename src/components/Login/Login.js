import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Image } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import loginBanner from '../../../assets/loginBanner.png';
import gmailIcon from '../../../assets/gmail.png';
import styles from './styles';

const Login = () => {
    return(
        <View style={styles.container}>
            <Image
             source={loginBanner}
             style={{ width: 300, height: 300 }}
             PlaceholderContent={<ActivityIndicator />}
            />
          <View style={styles.homeTextContainer}>
           <Text style={styles.textBold}>Welcome!</Text>
           <Text style={styles.textGray}>Just single click to login to you account</Text>
          </View>
            <TouchableOpacity style={styles.btnStyles}>
              <Image source={gmailIcon} style={{width: 30, height: 30}}/>
           <Text style={styles.btnText}>Login with G-Mail</Text>
          </TouchableOpacity>
         </View>
    )
}

export default Login;
