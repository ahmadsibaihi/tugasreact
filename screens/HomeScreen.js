import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

// data sementara file

const movies = [
    { id: '1', title: 'Pikachu: Petualangan Listrik', image: require('./assets/film1.png') },
    { id: '2', title: 'Spongebob: The Movie', image: require('./assets/2.png') },
    { id: '3', title: 'Tom and Jerry: Kejar-kejaran Seru', image: require('./assets/3.jpg') },
  ];  

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Mau nonton apa hari ini?"
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={20} color="#333" />
        <Text style={styles.locationText}>Cirebon</Text>
        <TouchableOpacity style={styles.dropdownIcon}>
            <Ionicons name="chevron-down-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>


      <View style={styles.promoBanner}>
      <Image source={require('./assets/bannerapp.png')} style={styles.promoImage} />
      </View>

      <Text style={styles.title}>Sedang Tayang</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Semua Film</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>XXI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>CGV</Text>
        </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {movies.map((item) => (
                <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
                >
                <Image 
                    source={item.image} 
                    style={styles.image} 
                />
                <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
            ))}
            </ScrollView>


      <View style={styles.navMenu}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Cinema')}
        >
          <Ionicons name="film-outline" size={24} color="#000" />
          <Text style={styles.navText}>Bioskop</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Tickets')}
        >
          <Ionicons name="ticket-outline" size={24} color="#000" />
          <Text style={styles.navText}>Tiket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f1f1f1',
    marginTop: 30.5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    marginLeft: 16,
    gap: 10,
  },
  locationContainer: {
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIcon: {
    marginLeft: 'auto', 
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
  promoBanner: {
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  promoImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 4,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 9,
    paddingHorizontal: 15,
    marginBottom: 50,
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
  },
  filterText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 16,
    marginBottom: 13,
  },  
  card: {
    marginHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    aspectRatio: 3 / 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  navText: {
    color: '#000',
    fontSize: 11,
    marginTop: 5,
    fontWeight: '500',
  },
});

export default HomeScreen;