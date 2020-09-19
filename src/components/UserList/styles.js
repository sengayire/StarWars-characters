import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingLeft: 15
  },

  details: {
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 20
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4
  },
  name: {
    flex: 1,
    paddingTop: 5,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  username: {
    flex: 1,
    color: 'gray',
    paddingTop: 5,
    paddingBottom: 15,
    fontSize: 15
  },
  listContainer: {}
});

export default styles;
