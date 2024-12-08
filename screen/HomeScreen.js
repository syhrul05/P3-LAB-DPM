import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  // Component lifecycle - didMount equivalent
  useEffect(() => {
    console.log('HomeScreen mounted');
    
    // Cleanup logic if needed
    return () => {
      console.log('HomeScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Welcome to My App" />
      <Card title="Card Title" description="This is a description of the card." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;