import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Share, StyleSheet } from "react-native";

export default function ShareButton({ meals }) {
  const handleShare = async () => {
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

    await Share.share({
      title: "MacroZone Daily Summary",
      message: `🥗 MacroZone Daily Summary

Calories: ${totals.calories.toLocaleString()} kcal
Protein: ${totals.protein}g
Carbs: ${totals.carbs}g
Fat: ${totals.fat}g

Meals Logged: ${meals.length}`,
    });
  };

  return (
    <Pressable
      onPress={handleShare}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name="share-outline" size={20} color={colors.foreground} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,

    backgroundColor: colors.card,

    borderWidth: 1,
    borderColor: colors.border,
  },

  pressed: {
    opacity: 0.8,
  },
});
