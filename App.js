import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const Web_URL = `https://port-0-node-ejs-gilmaro-19k5ygi525lcsucitd.gksl2.cloudtype.app/`;
  return (
    <WebView style={styles.container}
      source={{ uri:Web_URL }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
