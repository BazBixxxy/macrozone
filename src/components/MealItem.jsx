import { colors, globalStyles } from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function MealItem({ name, calories, protein, carbs, fat }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Feather name="coffee" size={16} color={colors.foreground} />
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>

          <Text style={globalStyles.caption}>
            {calories} kcal • {protein}g Protein • {carbs}g Carbs • {fat}g Fat
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    marginBottom: 4,
  },
});
