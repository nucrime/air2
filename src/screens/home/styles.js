import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    // height: '83%',
    aspectRatio: 3 / 3,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    lineHeight: 80,
    color: 'white',
    width: '70%',
    marginLeft: '5%',
  },
  button: {
    marginVertical: 20,
    backgroundColor: 'white',
    width: '45%',
    height: '8%',
    marginLeft: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: 'white',
    height: '10%',
    marginHorizontal: '8%',
    width: '85%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '10%',
    zIndex: 1,
  },
  searchButtonText: {
    fontSize: 12,
  },
});

export default styles;
