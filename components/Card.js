import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Card = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9, // Sesuai dengan lebar layar
    backgroundColor: '#FFD700', // Warna kuning emas
    padding: 20,
    marginVertical: 16,
    borderRadius: 16,
    elevation: 5, // Bayangan untuk Android
    shadowColor: '#000', // Bayangan untuk iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignSelf: 'center', // Memusatkan kartu
    borderWidth: 2,
    borderColor: '#FF4500', // Warna oranye untuk border
  },
  cardTitle: {
    fontSize: 26, // Teks lebih besar
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 18, // Lebih besar dari sebelumnya
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Card;
