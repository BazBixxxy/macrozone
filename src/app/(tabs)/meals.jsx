import MealItem from "@/components/MealItem";
import { clearAllMeals, getMeals } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function AllMealsScreen() {
  const [meals, setMeals] = useState([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleClearAll = () => {
    if (meals.length === 0) return;

    Alert.alert(
      "Clear All Meals",
      "This will permanently remove all saved meals.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          style: "destructive",
          onPress: async () => {
            await clearAllMeals();
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            loadMeals();
          },
        },
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [])
  );

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={globalStyles.title}>All Meals</Text>

          <Text style={globalStyles.subtitle}>
            {meals.length} {meals.length === 1 ? "meal" : "meals"} saved
          </Text>
        </View>

        {meals.length > 0 && (
          <Pressable
            onPress={handleClearAll}
            style={({ pressed }) => [
              styles.clearButton,
              pressed && styles.pressed,
            ]}
          >
            <Feather name="trash-2" size={16} color={colors.danger} />

            <Text style={styles.clearText}>Clear</Text>
          </Pressable>
        )}
      </View>

      {meals.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Feather
              name="clipboard"
              size={24}
              color={colors.mutedForeground}
            />
          </View>

          <Text style={globalStyles.muted}>No meals logged yet.</Text>

          <Text style={globalStyles.caption}>
            Meals you save will appear here.
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    ...globalStyles.spaceBetween,
    marginBottom: 28,
  },

  list: {
    gap: 12,
  },

  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },

  clearText: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.75,
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    gap: 10,
  },

  emptyIcon: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
});
