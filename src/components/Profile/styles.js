import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
     height: '100%',
     backgroundColor: '#fff',
     alignItems: 'center',
     width: '100%',
  },
  topContainer: {
      width: '100%',
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center'
  },
  centerContainer: {
      position: "absolute",
      top: 280,
      zIndex: 2,
    },
    image: {
     borderRadius: 50,
     width: 150,
     height: 150,
},
 imageText: {
     fontWeight:  'bold',
     fontSize: 40,
     color: '#FFFF'
 },
  bottomContainer: {
    height: '55%',
    width: '100%',
},
bottomContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    width: '100%',
},
bottomText: {
    fontWeight: 'bold',
    fontSize: 20,
},
bottomBtn: {
    padding: 20,
    display: 'flex',
    borderColor: '#017cfc',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 50,
    justifyContent: 'center',
},
botomBtnrtext: {
 color: 'grey',
 paddingLeft: 15,
 paddingRight: 15,
 fontSize: 16,
}
});


export default  styles