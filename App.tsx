import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/Navigator';

export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
}
