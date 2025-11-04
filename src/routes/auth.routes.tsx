import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}




// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import SignIn from '../pages/SignIn/SignIn';
// import SignUp from '../pages/SingUp'; // ← Import corrigido

// export type AuthStackParamList = {
//   SignIn: undefined;
//   SignUp: undefined;
// };

// const AuthStack = createStackNavigator<AuthStackParamList>();

// type AuthRoutesProps = Record<string, never>;
// type AuthRoutesState = Record<string, never>;

// export default class AuthRoutes extends React.Component<AuthRoutesProps, AuthRoutesState> {
//   render() {
//     return (
//       <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//         <AuthStack.Screen name="SignIn" component={SignIn} />
//         <AuthStack.Screen name="SignUp" component={SignUp} />
//       </AuthStack.Navigator>
//     );
//   }
// }