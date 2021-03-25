import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: '10%',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20, // more space below the textinput
  },
  row: {
    flexDirection: 'row', // to make all the elements inside a "row" to be in the same row
    alignItems: 'center',
    paddingVertical: 15, // more space for each of them
    borderBottomWidth: 1, // a line below each row
    borderColor: 'lightgrey',
    // https://youtu.be/ZxkmTsEYfg8?t=7695
  },
  iconContainer: {
    backgroundColor: '#efefef', // around pin icon
    padding: 7, // icon "takes" more space
    borderRadius: 10,
    marginRight: 15, // more space between icon and text
  },
  locationText: {
  },
});

export default styles;
