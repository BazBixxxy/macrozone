import { deleteMeal } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function MealItem({
  id,
  name,
  calories,
  protein,
  carbs,
  fat,
  onDelete,
}) {
  const handleLongPress = () => {
    Alert.alert("Delete Meal", `Are you sure you want to delete "${name}"?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteMeal(id);
          onDelete();
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        },
      },
    ]);
  };

  return (
    <Pressable
      onLongPress={handleLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.iconContainer}>
        <Feather name="coffee" size={18} color={colors.foreground} />
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>

        <Text style={globalStyles.caption}>
          {calories} kcal • {protein}g Protein • {carbs}g Carbs • {fat}g Fat
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.card,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: colors.border,

    padding: 16,
  },

  pressed: {
    opacity: 0.8,
  },

  iconContainer: {
    width: 40,
    height: 40,

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
