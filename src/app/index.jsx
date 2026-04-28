import HomeHeader from "@/components/HomeHeader";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>

      <HomeHeader />

      {/* Added asChild for better event forwarding */}
      <Link href="/meals" asChild>
        <Pressable style={globalStyles.pressable}>
          <Text style={globalStyles.buttonText}>Go to Meals</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
