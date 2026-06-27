import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, globalStyles } from "@/styles/global";

export default function AddMealScreen() {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const handleAddMeal = () => {
    console.log({
      name,
      calories,
      protein,
      carbs,
      fat,
    });
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
          Save a meal together with its nutritional information.
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

        <View style={styles.row}>
          <View style={styles.macro}>
            <Text style={globalStyles.label}>Protein</Text>

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
            <Text style={globalStyles.label}>Carbs</Text>

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
            <Text style={globalStyles.label}>Fat</Text>

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

  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },

  macro: {
    flex: 1,
  },

  pressed: {
    opacity: 0.9,
  },
});
