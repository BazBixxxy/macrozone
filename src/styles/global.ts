import { StyleSheet } from "react-native";

export const colors = {
  // Base
  background: "#09090b", // zinc-950
  foreground: "#fafafa", // zinc-50

  // Surface
  card: "#18181b", // zinc-900
  cardForeground: "#fafafa",

  popover: "#18181b",
  popoverForeground: "#fafafa",

  // Brand
  primary: "#fafafa",
  primaryForeground: "#18181b",

  secondary: "#27272a", // zinc-800
  secondaryForeground: "#fafafa",

  accent: "#27272a",
  accentForeground: "#fafafa",

  muted: "#18181b",
  mutedForeground: "#a1a1aa", // zinc-400

  // Borders & Inputs
  border: "#27272a",
  input: "#18181b",
  ring: "#d4d4d8",

  // Status
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#3b82f6",
};

export const globalStyles = StyleSheet.create({
  /* ---------- Layout ---------- */

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  content: {
    paddingBottom: 40,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  spaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  gap8: {
    gap: 8,
  },

  gap12: {
    gap: 12,
  },

  gap16: {
    gap: 16,
  },

  /* ---------- Header ---------- */

  header: {
    marginTop: 12,
    marginBottom: 28,
  },

  /* ---------- Typography ---------- */

  title: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -1,
    color: colors.foreground,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: -0.5,
    color: colors.foreground,
    marginBottom: 12,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 22,
    color: colors.mutedForeground,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.foreground,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
    marginBottom: 8,
  },

  caption: {
    fontSize: 12,
    color: colors.mutedForeground,
  },

  muted: {
    fontSize: 14,
    color: colors.mutedForeground,
  },

  empty: {
    fontSize: 14,
    textAlign: "center",
    color: colors.mutedForeground,
  },

  /* ---------- Card ---------- */

  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },

  cardHeader: {
    marginBottom: 18,
  },

  /* ---------- Divider ---------- */

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },

  /* ---------- Input ---------- */

  input: {
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.input,
    paddingHorizontal: 16,
    color: colors.foreground,
    fontSize: 16,
  },

  inputMultiline: {
    minHeight: 120,
    paddingTop: 14,
    textAlignVertical: "top",
  },

  /* ---------- Button ---------- */

  pressable: {
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  pressableSecondary: {
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  buttonText: {
    color: colors.primaryForeground,
    fontSize: 15,
    fontWeight: "600",
  },

  secondaryButtonText: {
    color: colors.foreground,
    fontSize: 15,
    fontWeight: "600",
  },

  /* ---------- Badge ---------- */

  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.secondary,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  badgeText: {
    color: colors.foreground,
    fontSize: 12,
    fontWeight: "600",
  },

  /* ---------- Avatar ---------- */

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: colors.foreground,
    fontSize: 16,
    fontWeight: "600",
  },

  /* ---------- Shadow ---------- */

  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 8,
  },
});
