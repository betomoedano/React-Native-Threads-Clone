import { View } from "react-native";
import { Reply } from "../types/threads";
import { Text } from "./Themed";
import { BottomIcons, PostFooter, PostHeading, blurhash } from "./ThreadItem";
import { Image } from "expo-image";

export default function ReplyItem({
  author,
  content,
  createdAt,
  id,
  likes,
}: Reply): JSX.Element {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Image
        source={author.photo}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
      />
      <View style={{ flexShrink: 1, gap: 10 }}>
        <PostHeading
          name={author.name}
          createdAt={createdAt}
          verified={author.verified}
        />
        <Text>{content}</Text>
        <BottomIcons />
        <PostFooter replies={0} likes={likes} />
      </View>
    </View>
  );
}
