import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StatusBar, StyleSheet, useColorScheme, View, Text, TextInput, Switch, TouchableOpacity} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  const [nome, setNome] = useState('Matheus');
  const [idade, setIdade] = useState(19);
  const [sexo, setSexo] = useState('feminino');
  const [valor, setValor] = useState(0);
  const [estudante, setBool] = useState(false);

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top + 20 }]}>
      <View style={styles.content}>
        <Text style={styles.title}>byron.bank</Text>
        <Text style={styles.subtitle}>Insira suas informações</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Seu nome..." 
          placeholderTextColor="#888"
          onChangeText={(textoDigitado) => setNome(textoDigitado)}
        />

        <TextInput 
          style={styles.input} 
          placeholder="Sua idade..." 
          placeholderTextColor="#888"
          keyboardType="numeric"
          onChangeText={(textoDigitado) => setIdade(Number(textoDigitado))}
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue: string) => setSexo(itemValue)}
            style={styles.picker}
            dropdownIconColor="#000000"
          >
            <Picker.Item label="Masculino" value="masculino" color="#000000" />
            <Picker.Item label="Feminino" value="feminino" color="#000000" />
          </Picker>
        </View>

        <Text style={styles.label}>Limite desejado: R$ {valor.toFixed(0)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000}
          step={50}
          value={valor}
          onValueChange={setValor}
          minimumTrackTintColor="#87CEEB"
          thumbTintColor="#87CEEB"
        />
        <View style={styles.switch}>
          <Text style={styles.subtitle}>É estudante?</Text>
          <Switch value={estudante} onValueChange={(itemValue: boolean) => setBool(itemValue)} />
        </View>

        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#87CEEB',
    textAlign: 'center', // Centraliza apenas o texto do título
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: '#000000',
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: 55,
    color: '#000000',
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switch: {
    alignItems: 'center',     
    justifyContent: 'center', 
    marginVertical: 20,
  }
});

export default App;
