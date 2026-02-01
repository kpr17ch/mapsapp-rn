import { View, Text, ScrollView, StyleSheet, Pressable, Linking } from "react-native";
import { useLocalSearchParams } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCafeStore, cafesData } from "@/stores/cafeStore";
import { theme } from "@/constants/theme";

export default function CafeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { cafes } = useCafeStore();

  const cafe = cafes.find((c) => c.id === id) || cafesData.find((c) => c.id === id);

  if (!cafe) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Café nicht gefunden</Text>
      </View>
    );
  }

  const openMaps = () => {
    const url = `maps://?q=${cafe.latitude},${cafe.longitude}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.name}>{cafe.name}</Text>
        {cafe.rating && (
          <View style={styles.rating}>
            <FontAwesome name="star" size={18} color={theme.colors.accent} />
            <Text style={styles.ratingText}>{cafe.rating}</Text>
            <Text style={styles.reviewCount}>({cafe.reviewCount} Bewertungen)</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={18} color={theme.colors.accent} />
          <Text style={styles.infoText}>{cafe.address}</Text>
        </View>

        {cafe.openNow !== undefined && (
          <View style={styles.infoRow}>
            <FontAwesome name="clock-o" size={18} color={theme.colors.accent} />
            <Text style={[styles.infoText, cafe.openNow ? styles.open : styles.closed]}>
              {cafe.openNow ? "Jetzt geöffnet" : "Geschlossen"}
            </Text>
          </View>
        )}

        {cafe.priceLevel && (
          <View style={styles.infoRow}>
            <FontAwesome name="euro" size={18} color={theme.colors.accent} />
            <Text style={styles.infoText}>{"€".repeat(cafe.priceLevel)}</Text>
          </View>
        )}
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={openMaps}
      >
        <FontAwesome name="location-arrow" size={18} color={theme.colors.background} />
        <Text style={styles.buttonText}>Route in Karten öffnen</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
    paddingTop: 100,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.text,
  },
  reviewCount: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  section: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  infoText: {
    fontSize: 16,
    color: theme.colors.text,
    flex: 1,
  },
  open: {
    color: theme.colors.success,
  },
  closed: {
    color: theme.colors.error,
  },
  button: {
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
    padding: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.sm,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.background,
  },
  errorText: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    textAlign: "center",
    marginTop: 100,
  },
});
