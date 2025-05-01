import React from 'react';
import { View, Text, Button } from 'react-native';

const ConfirmationScreen = ({ route, navigation }) => {
  const { selectedSeats, showtime, movieTitle } = route.params;

  return (
    <View>
      <Text>Tiket Pemesanan Berhasil!</Text>
      <Text>Film: {movieTitle}</Text>
      <Text>Jadwal: {showtime}</Text>
      <Text>Kursi yang Dipilih:</Text>
      {selectedSeats.map((seat, index) => (
        <Text key={index}>{seat}</Text>
      ))}
      <Button title="Kembali ke Halaman Utama" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ConfirmationScreen;