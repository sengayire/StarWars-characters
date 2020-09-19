import React from 'react';
import {View, Text, ImageBackground} from 'react-native'
import {Image} from 'react-native-elements';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IMAGE = { uri: "https://fcw.com/-/media/GIG/EDIT_SHARED/Software/binary_Code.jpg" };
const Profile = ({data, response, navigation:{navigate}}) => {
    const {name, picture} = data
    return(
        <View style={styles.container}>
           <ImageBackground  source={IMAGE} style={styles.topContainer}>
               <Text style={styles.imageText}>GitHub Developers</Text>
           </ImageBackground>
           <View style={styles.centerContainer}>
            <Image 
            style={styles.image} 
            source={{uri: picture}} />
           </View>
           <View style={styles.bottomContainer}>
               <View style={styles.bottomContentContainer}>
               <Text style={styles.bottomText} >Welcome {name}</Text>
                <TouchableOpacity style={styles.bottomBtn}>
                    <Text style={styles.botomBtnrtext}>View all GitHub users</Text>
                </TouchableOpacity>
               </View>
           </View>
        </View>
    )
}

export default Profile;
