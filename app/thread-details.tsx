import { useRoute } from "@react-navigation/native";
import { Thread } from "../types/threads";
import ThreadItem from "../components/ThreadItem";
import { SafeAreaView, ScrollView, View } from "react-native";
import ReplyItem from "../components/ReplyItem";

export default function ThreadDetails(): JSX.Element {
  const route = useRoute();
  const thread = route.params as Thread;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <ThreadItem thread={thread} />
        <View style={{ gap: 15 }}>
          {thread.replies?.map((reply) => (
            <ReplyItem key={reply.id} {...reply} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
