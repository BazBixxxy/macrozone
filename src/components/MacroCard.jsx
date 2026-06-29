import { colors, globalStyles } from "@/styles/global";
import { StyleSheet, Text, View } from "react-native";

export default function MacroCard({ label, value, goal, color }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: color,
            },
          ]}
        />

        <Text style={globalStyles.caption}>{label}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>

      <Text style={globalStyles.muted}>Goal {goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: "47%",
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    gap: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },

  value: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.foreground,
    letterSpacing: -1,
  },
});
