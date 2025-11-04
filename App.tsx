import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3f45d7" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}


// import React from 'react';
// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import Routes from './src/routes';

// type AppProps = Record<string, never>;
// type AppState = Record<string, never>;

// export default class App extends React.Component<AppProps, AppState> {
//   render() {
//     return (
//       <NavigationContainer>
//         <StatusBar backgroundColor="#F04FF" barStyle={'dark-content'}translucent />
//         <Routes />
//       </NavigationContainer>
//     );
//   }
// }
