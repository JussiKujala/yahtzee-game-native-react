import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import styles from './styles/style'
import Gameboard from './components/gameboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Gameboard/>
      <Footer/>
    </View>
  );
}
