import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const TicketBookingScreen = ({ route, navigation }) => {
  const { showtime, movieTitle } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelectSeat = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  const handleCheckout = () => {
    // Arahkan ke halaman konfirmasi
    navigation.navigate('Confirmation', { selectedSeats, showtime, movieTitle });
  };

  return (
    <View>
      <Text>Jadwal: {showtime}</Text>
      <Text>Pilih Kursi:</Text>
      {['A1', 'A2', 'A3', 'A4'].map((seat) => (
        <TouchableOpacity key={seat} onPress={() => handleSelectSeat(seat)}>
          <Text style={{ backgroundColor: selectedSeats.includes(seat) ? 'green' : 'grey' }}>
            {seat}
          </Text>
        </TouchableOpacity>
      ))}
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

export default TicketBookingScreen;