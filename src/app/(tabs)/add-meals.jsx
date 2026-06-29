import { addMeal } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AddMealScreen() {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const handleAddMeal = async () => {
    if (!name.trim() || !calories.trim()) {
      Alert.alert(
        "Missing Information",
        "Please enter a meal name and calories."
      );
      return;
    }

    await addMeal({
      name: name.trim(),
      calories: Number(calories),
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
    });

    setName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert("Success", "Meal added successfully!");

    router.replace("/");
  };

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Add Meal</Text>

        <Text style={globalStyles.subtitle}>
          Save a meal together with its nutritional information for quick
          tracking.
        </Text>
      </View>

      <View style={globalStyles.card}>
        <View style={styles.field}>
          <Text style={globalStyles.label}>Meal Name</Text>

          <TextInput
            style={globalStyles.input}
            placeholder="e.g. Grilled Chicken & Rice"
            placeholderTextColor={colors.mutedForeground}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.field}>
          <Text style={globalStyles.label}>Calories</Text>

          <TextInput
            style={globalStyles.input}
            placeholder="520"
            placeholderTextColor={colors.mutedForeground}
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
          />
        </View>

        <View style={styles.macroRow}>
          <View style={styles.macro}>
            <Text style={globalStyles.label}>Protein (g)</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="35"
              placeholderTextColor={colors.mutedForeground}
              keyboardType="numeric"
              value={protein}
              onChangeText={setProtein}
            />
          </View>

          <View style={styles.macro}>
            <Text style={globalStyles.label}>Carbs (g)</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="42"
              placeholderTextColor={colors.mutedForeground}
              keyboardType="numeric"
              value={carbs}
              onChangeText={setCarbs}
            />
          </View>

          <View style={styles.macro}>
            <Text style={globalStyles.label}>Fat (g)</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="18"
              placeholderTextColor={colors.mutedForeground}
              keyboardType="numeric"
              value={fat}
              onChangeText={setFat}
            />
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            globalStyles.pressable,
            pressed && styles.pressed,
          ]}
          onPress={handleAddMeal}
        >
          <Feather name="plus" size={18} color={colors.primaryForeground} />

          <Text style={globalStyles.buttonText}>Add Meal</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 18,
  },

  macroRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },

  macro: {
    flex: 1,
  },

  pressed: {
    opacity: 0.85,
  },
});
