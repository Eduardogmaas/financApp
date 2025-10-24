import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
}

type Props = StackScreenProps<AuthStackParamList,'SignIn'>

// type SignInProps = Record<string, never>;
// type SignInState = Record<string, never>;

// export default class SignIn extends React.Component<SignInProps, SignInState> 
export default class SignIn extends React.Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <Background>
        <Container>
          
        </Container>
      </Background>
      // <View style={styles.container}>
      //   <Text>Tela Login</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});