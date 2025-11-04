
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Input, SubmitButton, SubmitText, BackButton, BackText } from './styles';

export default function SignUp() {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    if (name.length < 3) return Alert.alert('Erro', 'O nome deve ter ao menos 3 caracteres.');
    if (!email.includes('@')) return Alert.alert('Erro', 'Digite um e-mail válido.');
    if (password.length < 6) return Alert.alert('Erro', 'A senha deve ter ao menos 6 caracteres.');
    if (password !== confirmPassword) return Alert.alert('Erro', 'As senhas não coincidem.');

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('SignIn');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <Background>
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>← Voltar</BackText>
        </BackButton>

        <Container>
          <Input
            placeholder="Nome"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
          <Input
            placeholder="Seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirme a senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSignUp} disabled={loading}>
            <SubmitText>{loading ? 'Cadastrando...' : 'Cadastrar'}</SubmitText>
          </SubmitButton>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}

// // index.tsx
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// type SignUpProps = Record<string, never>;
// type SignUpState = Record<string, never>;

// export default class SignUp extends React.Component<SignUpProps, SignUpState> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Tela de Cadastro</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
