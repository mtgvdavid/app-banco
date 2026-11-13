import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

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
    textAlign: 'center',
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
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#CCCCCC',
    paddingVertical: 12,
    marginTop: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
});

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
  const [estudante, setEstudante] = useState(false);

  function mostrarAlerta() {
    Alert.alert(
      `Seja bem-vindo ${nome}! Idade: ${idade}`, // Troque ' por ` aqui
      `Seu limite inicial no byron.bank é de R$ ${valor}.\nSexo: ${sexo}\nEstudante: ${estudante ? 'Sim' : 'Não'}`
    );
  }


  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top + 20 }]}>
      <View style={styles.content}>
        <Text style={styles.title}>byron.bank</Text>
        <Text style={styles.subtitle}>Insira suas informações</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome..."
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Sua idade..."
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={String(idade)}
          onChangeText={(textoDigitado) => setIdade(Number(textoDigitado) || 0)}
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
          <Switch value={estudante} onValueChange={setEstudante} />
        </View>

        <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

