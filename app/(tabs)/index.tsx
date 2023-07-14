import * as React from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);

  React.useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 30 }}
      refreshControl={
        <RefreshControl
          refreshing={false}
          tintColor={"transparent"}
          onRefresh={() => animationRef.current?.play()}
        />
      }
    >
      <Lottie
        ref={animationRef}
        source={require("../../lottie-animations/threads.json")}
        style={{
          width: 90,
          height: 90,
          alignSelf: "center",
        }}
        loop={false}
        onAnimationFinish={() => animationRef.current?.pause()}
      />
      <Text style={styles.title}>Home Screen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
