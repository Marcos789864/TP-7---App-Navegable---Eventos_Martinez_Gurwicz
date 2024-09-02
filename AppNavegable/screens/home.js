import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import jwtDecode from 'jwt-decode';

const HomeScreen = ({ route }) => {
  const { token } = route.params; // Extrae el token pasado desde `LoginScreen`

  let user = {};
  if (token) {
    try {
      user = jwtDecode(token); // Decodifica el token para obtener la información del usuario
    } catch (e) {
      console.error('Token decoding error:', e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {user.firstName} {user.lastName}!</Text>
      <Text style={styles.subtitle}>Nombre de usuario: {user.username}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;