import { globalStyles } from "@/styles/global";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";

export default function RecentMeals() {
  return (
    <ScrollView style={styles.container}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

      <View style={styles.list}>
        <MealItem
          name="Chicken & Rice"
          calories={540}
          protein={45}
          carbs={50}
          fat={12}
        />

        <MealItem
          name="Protein Shake"
          calories={280}
          protein={30}
          carbs={20}
          fat={8}
        />

        <MealItem
          name="Salmon Salad"
          calories={430}
          protein={35}
          carbs={10}
          fat={25}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 92,
  },

  list: {
    gap: 12,
  },
});
