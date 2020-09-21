import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff'
  },
  container: {
    height: '100%',
    backgroundColor: '#fff',
     alignItems: 'center',
     paddingTop: 50,
     paddingLeft: 20,
     paddingRight: 20,
     width: '100%',

  },
  homeTextContainer: {
      paddingTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  textBold: {
      fontWeight: 'bold',
      fontSize: 30,
  },
  textGray: {
   color: 'grey',
   fontSize: 16,
   paddingTop: 10,
  },
  btnStyles: {
      padding: 20,
      width: '90%',
      display: 'flex',
      backgroundColor: '#017cfc',
      alignItems: 'center',
      borderRadius: 50,
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 16,
  }
});


export default  styles