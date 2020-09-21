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
},
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    borderRadius: 100,
    padding: 5,
    elevation: 2,
    width: '100%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    paddingBottom: 25,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20
  }
});


export default  styles