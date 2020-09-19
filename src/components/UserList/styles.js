import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    paddingLeft: 15,
  },
  details: {
    flex: 1,
    marginLeft: 20,
    paddingTop: 30,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
    paddingLeft: 10,
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
    paddingBottom: 30,
    fontSize: 15
  },
  listContainer: {}
});

export default styles;
