import  React, {useState} from 'react';
import {View, Text} from 'react-native';

import { googleLogIn } from '../../helpers/socilaLogin/google';
import {Login} from '../../components';
import {Profile} from '../../components';

const LoginScreen = ({navigation}) => {
    const [data, setDate] = useState(null);
    const [response, setResponse] = useState(null);
    return data && <Profile data={data} response={response} navigation={navigation}/> 
                ||  <Login onPress={() => googleLogIn({ setDate, setResponse })}/>
    
}

export default LoginScreen;
