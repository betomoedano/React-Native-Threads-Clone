import { Pressable, StyleSheet, View } from "react-native";
import { Thread } from "../types/threads";
import { Image } from "expo-image";
import { Text } from "./Themed";
import { timeAgo } from "../utils/timeAgo";
import { Feather } from "@expo/vector-icons";
interface TheradItemProps {
  thread: Thread;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ThreadItem({ thread }: TheradItemProps): JSX.Element {
  return (
    <Pressable style={styles.container}>
      <Image
        source={thread.image}
        style={styles.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "500" }}>{thread.author.username}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{timeAgo(thread.createdAt)}</Text>
          <Feather name="more-horizontal" size={14} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
