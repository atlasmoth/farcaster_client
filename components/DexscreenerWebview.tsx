import WebView from "react-native-webview";
import { StyleSheet } from "react-native";

export default function DexscreenerWebview({ navigation }) {
  const { index, routes } = navigation.getState();
  const stateItems = routes[index].params;
  return (
    <WebView
      onLoad={(e) => {}}
      source={{ uri: stateItems.url }}
      style={[StyleSheet.absoluteFill]}
      injectedJavaScript={`
      alert('Hello from React Native!')
      
      `}
      javaScriptEnabled={true}
    ></WebView>
  );
}
