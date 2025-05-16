import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

const animais = [
  {
    numero: 1,
    nome: 'Avestruz',
    imagem: 'https://i.pinom/736x/ef/3a/bb/ef3abbbc39b3cacee7ba927f95f1b6cd.jpg',
  },
  {
    numero: 2,
    nome: 'Águia',
    imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4ffcf1faee14356c00b1.jpg',
  },
  {
    numero: 3,
    nome: 'Burro',
    imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg',
  },
  {
    numero: 4,
    nome: 'Borboleta',
    imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb15d5f7f243da7466d1ab4f4.jpg',
  },
  {
    numero: 5,
    nome: 'Cachorro',
    imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg',
  },
  {
    numero: 6,
    nome: 'Cabra',
    imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg',
  },
  {
    numero: 7,
    nome: 'Carneiro',
    imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg',
  },
  {
    numero: 8,
    nome: 'Camelo',
    imagem: 'https://i.pinimg.com/736x/85/0b/11/850b1e4c316abfe126ff1866c2aaeb0f.jpg',
  },
  {
    numero: 9,
    nome: 'Cobra',
    imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg',
  },
  {
    numero: 10,
    nome: 'Coelho',
    imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg',
  },
];

const JogoDoBichoScreen = () => {
  const [animalGerado, setAnimalGerado] = useState(null);

  const gerarAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animais.length);
    setAnimalGerado(animais[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Gerador do Jogo do Bicho</Title>
          
          <Button 
            mode="contained" 
            onPress={gerarAnimal}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Gerar Animal
          </Button>

          {animalGerado && (
            <View style={styles.animalContainer}>
              <Text style={styles.animalTitle}>{animalGerado.nome}</Text>
              <Text style={styles.animalNumber}>Número: {animalGerado.numero}</Text>
              <Image 
                source={{ uri: animalGerado.imagem }} 
                style={styles.animalImage}
                resizeMode="cover"
              />
            </View>
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0066CC',
  },
  button: {
    marginVertical: 15,
    backgroundColor: '#0066CC',
    paddingVertical: 5,
  },
  buttonLabel: {
    fontSize: 16,
    color: 'white',
  },
  animalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  animalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  animalNumber: {
    fontSize: 18,
    marginBottom: 15,
    color: '#666',
  },
  animalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default JogoDoBichoScreen;