import * as AppAuth from 'expo-app-auth';
import { AsyncStorage, Alert } from 'react-native';
import config from '../../../config';
import appAuthConfig from '../../../Config/appAuthConfig';

const { STORAGE_KEY, API_URL } = config;

const googleLogIn = async ({ setDate, setResponse }) => {
  try {
    const response = await AppAuth.authAsync(appAuthConfig);
    const result = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${response.accessToken}`,
      'Content-Type': 'application/json'
    },
  });
    const data = await result.json();
    setDate(data);
    setResponse(response);
  } catch ({ message }) {
    alert(`login: ${message}`);
  }
};

const signOutAsync = async (response, navigation) => {
  const StorageKey = STORAGE_KEY;
  try {
    await AppAuth.revokeAsync(appAuthConfig, {
      token: response,
      isClientIdProvided: true
    });
    await AsyncStorage.removeItem(StorageKey);
    Alert.alert(
      'Do you need to logout?',
      'Press Ok to logout!!',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel'
        },
        { text: 'OK', onPress: () => navigation.replace('Login') }
      ],
      { cancelable: false }
    );
    return true;
  } catch ({ message }) {
    alert(`Failed to revoke token: ${message}`);
    return false;
  }
};

export { googleLogIn, signOutAsync };