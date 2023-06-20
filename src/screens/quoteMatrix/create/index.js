import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TopTabBar} from '@components';

const CreateQuote = () => {
  return (
    <View style={styles.container}>
      <TopTabBar />
      <Text>CreateQuote</Text>
    </View>
  );
};

export {CreateQuote};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
