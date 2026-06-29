import { colors, globalStyles } from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";

export default function RecentMeals({ meals, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

      {meals.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Feather name="coffee" size={22} color={colors.mutedForeground} />
          </View>

          <Text style={globalStyles.muted}>No meals logged yet.</Text>

          <Text style={globalStyles.caption}>
            Meals you add will appear here.
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          {meals.slice(0, 5).map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 80,
  },

  list: {
    gap: 12,
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 36,
    gap: 10,
  },

  emptyIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
});
