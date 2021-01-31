import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      <Text style={styles.bedrooms}>1 bed. 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Entire flat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        alias, aliquam, cupiditate dicta dolor expedita facilis in inventore
        itaque, iusto modi nam neque non placeat quae rem sunt voluptas
        voluptatem!
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $32</Text> / night
      </Text>

      <Text style={styles.totalPrice}>$130 total</Text>
    </View>
  );
};

export default Post;
