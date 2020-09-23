import React, {useState} from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';

import { signOutAsync } from '../../helpers/socilaLogin/google';
import backArrow from '../../../assets/backArrow.png';
import Modal from './Modal';
import styles from './styles';

const IMAGE = { uri: "https://fcw.com/-/media/GIG/EDIT_SHARED/Software/binary_Code.jpg" };
const Profile = ({data: {name, picture} , response, navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
           <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}/>
           <ImageBackground  source={IMAGE} style={styles.topContainer}>
               <Text style={styles.imageText}>GitHub Developers</Text>
           </ImageBackground>
            <SafeAreaView style={{top: -320, right: 160}}>
                <TouchableOpacity onPress={() =>
                signOutAsync(response && response.accessToken, navigation)}>
                  <Image  source={backArrow} style={{width:22, height:20}}/>
                </TouchableOpacity>
            </SafeAreaView>
           <View style={styles.centerContainer}>
            <Image 
            style={styles.image} 
            source={{uri: picture}} />
           </View>
           <View style={styles.bottomContainer}>
               <View style={styles.bottomContentContainer}>
               <Text style={styles.bottomText} >Welcome {name}</Text>
                <TouchableOpacity 
                onPress={() => {
                    setModalVisible(true);
                  }}
                style={styles.bottomBtn}>
                    <Text style={styles.botomBtnrtext}>View all GitHub users</Text>
                </TouchableOpacity>
               </View>
           </View>
        </View>
    )
}

export default Profile;
