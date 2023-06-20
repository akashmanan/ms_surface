import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TopTabBar} from '@components';

const RenovationSetup = () => {
  return (
    <View style={styles.container}>
      <TopTabBar />
      <Text>RenovationSetup</Text>
    </View>
  );
};

export {RenovationSetup};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
