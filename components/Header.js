import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Header;