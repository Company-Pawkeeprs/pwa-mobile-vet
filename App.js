import React from 'react';
import { WebView } from 'react-native-webview'; 

export default function App() {
  return (
    <WebView source={{ uri: 'https://web-app-sepia-three.vercel.app/sign-in' }} style={{ flex: 1 }}/>
  );
}
