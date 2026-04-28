import { StyleSheet } from "react-native";

export const colors = {
  // Shadcn Zinc Palette (Dark Mode)
  background: "#09090b", // zinc-950
  foreground: "#fafafa", // zinc-50
  card: "#09090b",
  cardForeground: "#fafafa",
  popover: "#09090b",
  primary: "#fafafa", // Primary is often inverted in dark mode
  primaryForeground: "#18181b",
  secondary: "#27272a", // zinc-800
  secondaryForeground: "#fafafa",
  muted: "#27272a",
  mutedForeground: "#a1a1aa", // zinc-400
  accent: "#27272a",
  border: "#27272a", // Subtle borders are key
  input: "#27272a",
  ring: "#d4d4d8",
  alert: "#ef4444", // destructive
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 24, // Slightly wider gutters
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -0.75, // Tighter letter spacing for that modern UI feel
    color: colors.foreground,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: -0.4,
    color: colors.foreground,
    marginTop: 32,
    marginBottom: 12,
  },
  empty: {
    color: colors.mutedForeground,
    fontSize: 14,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  // Styled like a shadcn "Button" component
  pressable: {
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    borderRadius: 6, // shadcn uses a subtle 6px or 8px radius
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: colors.primaryForeground,
    fontSize: 14,
    fontWeight: "500",
  },
  // Bonus: Card style for a "shadcn" look
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
});
