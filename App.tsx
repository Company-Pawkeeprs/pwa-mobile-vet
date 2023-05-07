import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StatusBar } from 'react-native';

export default function App() {
  const uri = Constants.manifest?.extra?.WEB_URL

  return (
    <>
      <StatusBar style="auto" />
      <WebView source={{ uri }} style={{ flex: 1 }} />
    </>
  );
}