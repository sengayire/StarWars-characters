import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import { UserList, SearchUser } from '../../components';

const UserListScreen = ({data, navigation, route: {params: {country}}}) => {
 const [username, setUsername] = useState('') 

  const onChange = (text) => setUsername(text)
 
    useEffect(() =>  () => onChange(), [setUsername]);

    const List = () =>  <UserList data={data} location={country} username={username} navigation={navigation}/>
    return (
           <View style={{height: '100%'}}>
               <SearchUser  value={username} onChange={onChange} />
               <List />
           </View>
    )
}

export default UserListScreen;
