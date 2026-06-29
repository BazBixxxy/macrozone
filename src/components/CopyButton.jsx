import { colors, globalStyles } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { Alert, Pressable, StyleSheet, Text } from "react-native";

export default function CopyButton({ meals }) {
  const handleCopy = async () => {
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

    const summary = `🥗 MacroZone Daily Summary

Calories: ${totals.calories.toLocaleString()} kcal
Protein: ${totals.protein}g
Carbs: ${totals.carbs}g
Fat: ${totals.fat}g

Meals Logged: ${meals.length}`;

    await Clipboard.setStringAsync(summary);

    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    Alert.alert(
      "Copied!",
      "Your macro summary has been copied to the clipboard."
    );
  };

  return (
    <Pressable
      onPress={handleCopy}
      style={({ pressed }) => [
        globalStyles.pressableSecondary,
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name="copy-outline" size={18} color={colors.foreground} />

      <Text style={globalStyles.secondaryButtonText}>Copy Summary</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },

  pressed: {
    opacity: 0.8,
  },
});
