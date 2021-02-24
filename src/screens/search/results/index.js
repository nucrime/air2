import React from 'react';
import {View, FlatList, Pressable, ImageBackground} from 'react-native';
import feed from '../../../../assets/data/feed';
import Post from '../../../components/post';
// import styles from './styles';
// import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchResultPage = (props) => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item} /> }
      />
    </View>
  );
};

export default SearchResultPage;
