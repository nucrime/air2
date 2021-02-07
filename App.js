/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home';
import Post from './src/components/post';

import feed from './assets/data/feed';
import SearchResultPage from './src/screens/searchresults';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<HomeScreen />*/}
        {/*<Post post={post1} />*/}
        <SearchResultPage post={post1} />
      </SafeAreaView>
    </>
  );
};
export default App;
