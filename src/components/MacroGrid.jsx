import { StyleSheet, View } from "react-native";
import MacroCard from "./MacroCard";

const DAILY_GOALS = {
  calories: 2000,
  protein: 150,
  carbs: 250,
  fat: 65,
};

export default function MacroGrid({ meals }) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    }
  );

  return (
    <View style={styles.grid}>
      <MacroCard
        label="Calories"
        value={totals.calories.toLocaleString()}
        goal={DAILY_GOALS.calories.toLocaleString()}
        color="#ef4444"
      />

      <MacroCard
        label="Protein"
        value={`${totals.protein}g`}
        goal={`${DAILY_GOALS.protein}g`}
        color="#22c55e"
      />

      <MacroCard
        label="Carbs"
        value={`${totals.carbs}g`}
        goal={`${DAILY_GOALS.carbs}g`}
        color="#eab308"
      />

      <MacroCard
        label="Fat"
        value={`${totals.fat}g`}
        goal={`${DAILY_GOALS.fat}g`}
        color="#3b82f6"
      />
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
