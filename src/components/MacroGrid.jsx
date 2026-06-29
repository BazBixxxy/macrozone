import { StyleSheet, View } from "react-native";
import MacroCard from "./MacroCard";

export default function MacroGrid() {
  return (
    <View style={styles.grid}>
      <MacroCard label="Calories" value="0" goal="2,000" color="#ef4444" />

      <MacroCard label="Protein" value="0g" goal="150g" color="#22c55e" />

      <MacroCard label="Carbs" value="0g" goal="250g" color="#eab308" />

      <MacroCard label="Fat" value="0g" goal="65g" color="#3b82f6" />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
});
