import { Share } from 'react-native';

const shareProfile = async (username, url) => {
  try {
    await Share.share({
      message: `Click the Url to visit @${username}, ${url}`,
      title: 'GitHub Profile'
    });
  } catch (error) {
    alert(error.message);
  }
};

export default shareProfile;
