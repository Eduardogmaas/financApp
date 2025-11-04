
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  LogoArea,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    if (!email.includes('@')) return Alert.alert('Erro', 'Digite um e-mail válido.');
    if (password.length < 6) return Alert.alert('Erro', 'A senha deve ter ao menos 6 caracteres.');

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      // Aqui você redirecionaria para o dashboard principal, por exemplo:
      // navigation.navigate('Home');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <Background>
        <Container>
          <LogoArea>
            <Image source={require('../../assets/logo.png')} style={{ width: 180, height: 180 }} resizeMode="contain" />
          </LogoArea>

          <Input
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSignIn} disabled={loading}>
            <SubmitText>{loading ? 'Acessando...' : 'Acessar'}</SubmitText>
          </SubmitButton>

          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta!</LinkText>
          </Link>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { KeyboardAvoidingView, Platform } from 'react-native';
// import type { StackScreenProps } from '@react-navigation/stack';

// import {
//   Background,
//   Container,
//   Logo,
//   AreaInput,
//   Input,
//   SubmitButton,
//   SubmitText,
//   Link,
//   LinkText,
// } from './styles';

// type AuthStackParamList = {
//   SignIn: undefined;
//   SignUp: undefined;
// }

// type Props = StackScreenProps<AuthStackParamList,'SignIn'>

// // type SignInProps = Record<string, never>;
// // type SignInState = Record<string, never>;

// // export default class SignIn extends React.Component<SignInProps, SignInState> 
// export default class SignIn extends React.Component<Props> {
//   render() {
//     const {navigation} = this.props;
//     return (
//       <Background>
//         <Container>
          
//         </Container>
//       </Background>
//       // <View style={styles.container}>
//       //   <Text>Tela Login</Text>
//       // </View>
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
