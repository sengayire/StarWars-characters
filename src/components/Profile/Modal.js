import React, {useState} from 'react';
import {View, Modal, TouchableHighlight, TextInput,Text } from 'react-native';
import {Image} from 'react-native-elements';
import searchIcon from '../../../assets/searchIcon.png'
import styles from './styles';


const MyModal = ({modalVisible, setModalVisible, navigation}) => {
    const [value, onChangeText] = useState();
    return(
    <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>GitHub user Location</Text>
              <View style={{width: '100%', paddingBottom: 20}}>
              <TextInput
              placeholder='Enter Country'
              style={{ height: 60, borderColor: 'gray', borderWidth: 0.5,  borderRadius: 100, paddingLeft: 20 }}
              onChangeText={text => onChangeText(text)}
              value={value}
             />
              </View>
  
              <TouchableHighlight
                style={{ ...styles.openButton, borderWidth: 1, borderColor: "#017cfc", alignItems: 'center' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('UserList', {country: value});
                }}
              >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{
                    color: 'gray',
                    fontWeight: '300',
                    paddingRight: 20,
                    fontSize: 16
               }}>Search</Text>
                <Image source={searchIcon} style={{width: 50, height: 50}} />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>)
}

export default MyModal;