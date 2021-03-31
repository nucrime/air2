import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home';
import Post from './src/components/post';

import feed from './assets/data/feed';
import SearchResultPage from './src/screens/search/results';
import SearchDestinationPage from './src/screens/search/destination';
import GuestsScreen from './src/screens/guests';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<HomeScreen />*/}
        {/*<Post post={post1} />*/}
        {/*<SearchResultPage />*/}
        {/*<SearchDestinationPage />*/}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};
export default App;
