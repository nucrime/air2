import React, {useState} from 'react';
import {View, TextInput, Text, Pressable, ImageBackground, FlatList} from 'react-native';
import feed from '../../../../assets/data/feed';
import Post from '../../../components/post';
import styles from './styles';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import searchResults from '../../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const SearchDestinationPage = (props) => {
  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guests')}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30}></Entypo>
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default SearchDestinationPage;
