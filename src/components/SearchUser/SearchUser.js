import React from 'react';
import {View, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

const SearchUser = ({onChange, value}) => {
    return(
        <View style={styles.container}>
            <SearchBar
            onChangeText={onChange}
            value={value}
            inputContainerStyle={
                {backgroundColor: 'transparent', borderWidth: 0.5, borderColor: 'grey', borderBottomColor: 'grey', borderBottomWidth: 0.5, borderRadius: 100}
                } 
            placeholder='Enter username...' 
             containerStyle={
                {backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0}
                } 
            />
        </View>
    )
}

export default SearchUser;
