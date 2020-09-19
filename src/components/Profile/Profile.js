import React from 'react';
import {View, Text, ImageBackground} from 'react-native'
import {Image} from 'react-native-elements';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IMAGE = { uri: "https://www.loverskeyadventures.com/wp-content/uploads/2016/10/Landscape-photography-HDR.jpg" };
const Profile = () => {
    return(
        <View style={styles.container}>
           <ImageBackground  source={IMAGE} style={styles.topContainer} />
           <View style={styles.centerContainer}>
            <Image 
            style={styles.image} 
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUIE7MZAcG_Dq3TVof1tHAYLUSSq1y-nGrDQ&usqp=CAU"}} />
           </View>
           <View style={styles.bottomContainer}>
               <View style={styles.bottomContentContainer}>
                <Text style={styles.bottomText} >Welcome Sengayire Prince</Text>
                <TouchableOpacity style={styles.bottomBtn}>
                    <Text style={styles.botomBtnrtext}>View all Star wars actors</Text>
                </TouchableOpacity>
               </View>
           </View>
        </View>
    )
}

export default Profile;
