import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    numeros.sort((a, b) => a - b);
    setJogoGerado(numeros);
    setJogosMegaSena([...jogosMegaSena, numeros]);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Gerador de Jogos da Mega Sena</Title>
          
          <Button 
            mode="contained" 
            onPress={gerarJogo}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Gerar Jogo
          </Button>

          {jogoGerado.length > 0 && (
            <View style={styles.jogoContainer}>
              <Text style={styles.jogoTitle}>Jogo Gerado:</Text>
              <View style={styles.numerosContainer}>
                {jogoGerado.map((numero, index) => (
                  <View key={index} style={styles.numero}>
                    <Text style={styles.numeroText}>{numero}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {jogosMegaSena.length > 0 && (
            <View style={styles.historicoContainer}>
              <Text style={styles.historicoTitle}>Histórico de Jogos:</Text>
              <FlatList
                data={[...jogosMegaSena].reverse()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.jogoItem}>
                    <Text style={styles.jogoItemText}>
                      Jogo {jogosMegaSena.length - index}: {item.join(', ')}
                    </Text>
                  </View>
                )}
              />
            </View>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
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
  jogoContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  jogoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  numerosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  numero: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  numeroText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  historicoContainer: {
    marginTop: 20,
  },
  historicoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jogoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  jogoItemText: {
    fontSize: 14,
  },
});

export default MegaSenaScreen;