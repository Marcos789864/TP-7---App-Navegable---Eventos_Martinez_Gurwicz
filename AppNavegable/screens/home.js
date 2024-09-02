import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const decodeTokenManual = (token) => {
  try {
    // Dividir el token en sus partes (header, payload, signature)
    const [header, payload, signature] = token.split('.');
    
    if (!payload) {
      throw new Error('Invalid token');
    }

    // Decodificar base64 URL (cambiar _ por / y - por +)
    const base64Url = payload.replace(/_/g, '/').replace(/-/g, '+');
    
    // Decodificar base64
    const base64 = atob(base64Url);
    
    // Convertir a objeto JSON
    const user = JSON.parse(base64);
    return user;
  } catch (error) {
    console.error('Manual token decoding error:', error);
    return null;
  }
};

const Home = ({ route }) => {
  const { token } = route.params;
  let user = {};

  if (token) {
    user = decodeTokenManual(token);
    console.log(user);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {user.username}!</Text>
      
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

export default Home;