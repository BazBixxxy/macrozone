import { globalStyles } from "@/styles/global";
import { StyleSheet, Text, View } from "react-native";
import ShareButton from "./ShareButton";

export default function HomeHeader({ meals }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <View style={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
      <ShareButton meals={meals} />
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
    marginBottom: 30,
  },
});
