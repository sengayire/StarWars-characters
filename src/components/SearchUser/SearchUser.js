import React from 'react';
import {View, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';


const SearchUser = ({onChange, value}) => {
    return(
        <View >
            <SearchBar
            onChangeText={onChange}
            value={value}
            inputContainerStyle={
                {backgroundColor: 'transparent', borderWidth: 0.5, borderColor: 'grey', borderBottomColor: 'grey', borderBottomWidth: 0.5}
                } 
            placeholder='Search user' containerStyle={
                {backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0}
                } 
            />
        </View>
    )
}

export default SearchUser;
