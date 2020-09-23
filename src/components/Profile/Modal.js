import React, {useState} from 'react';
import {View, Modal, TouchableHighlight, TextInput,Text, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'


import styles from './styles';

const MyModal = ({modalVisible, setModalVisible, navigation}) => {
    const [country, setCountry] = useState();

    const [countriesModal, setCountriesModal] = useState(false);
    const listUser = (country) => {
      return navigation.navigate('UserList', {country})
    }
    return(
    <View>
      {country && listUser(country)}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Search GitHub user  by Location</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, borderWidth: 1, borderColor: "#017cfc", alignItems: 'center' }}
                onPress={() => {
                  setCountriesModal(true)
                }}
              >
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
               <CountryPicker onSelect={({name}) => {
                 setModalVisible(!modalVisible)
                 setCountry(name)
                 }} 
                 {...{withFilter: true}}
                 visible={countriesModal}/>
                </View>
              </TouchableHighlight>
              <View style={{marginTop: 20}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{fontWeight: '800', color: '#017cfc'}}>Close</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>)
}

export default MyModal;
