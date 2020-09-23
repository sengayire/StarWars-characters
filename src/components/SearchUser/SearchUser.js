import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Image} from 'react-native-elements';

import { signOutAsync } from '../../helpers/socilaLogin/google';
import backArrowBlack from '../../../assets/backArrowBlack.png';
import styles from './styles';

const SearchUser = ({onChange, value, navigation}) => {
    console.log('response', navigation);
    return(
       <SafeAreaView>
        <View style={styles.container}>
       <View style={{paddingLeft: 20, paddingBottom: 20}}>
       <TouchableOpacity style={{width: 30}} onPress={() => navigation.goBack()} >
            <Image  source={backArrowBlack} style={{width:22, height:20}}/>
        </TouchableOpacity>
       </View>
            <SearchBar
            onChangeText={onChange}
            value={value}
            inputContainerStyle={{
                 backgroundColor: 'transparent',
                 borderWidth: 0.5, borderColor: 'grey', 
                 borderBottomColor: 'grey', 
                 borderBottomWidth: 0.5, 
                 borderRadius: 100
                }} 
            placeholder='Enter username...' 
             containerStyle={
                {backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0}
                } 
            />
        </View>
        </SafeAreaView>
    )
}

export default SearchUser;
