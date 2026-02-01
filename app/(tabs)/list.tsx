import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCafeStore, cafesData } from "@/stores/cafeStore";
import { theme } from "@/constants/theme";
import { Cafe } from "@/types/cafe";
import { useEffect } from "react";

function CafeCard({ cafe }: { cafe: Cafe }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={() => router.push(`/cafe/${cafe.id}`)}
    >
      <View style={styles.cardContent}>
        <Text style={styles.name}>{cafe.name}</Text>
        <Text style={styles.address}>{cafe.address}</Text>
        <View style={styles.meta}>
          {cafe.rating && (
            <View style={styles.rating}>
              <FontAwesome name="star" size={14} color={theme.colors.accent} />
              <Text style={styles.ratingText}>{cafe.rating}</Text>
              <Text style={styles.reviewCount}>({cafe.reviewCount})</Text>
            </View>
          )}
          {cafe.openNow !== undefined && (
            <Text style={[styles.status, cafe.openNow ? styles.open : styles.closed]}>
              {cafe.openNow ? "Geöffnet" : "Geschlossen"}
            </Text>
          )}
        </View>
      </View>
      <FontAwesome name="chevron-right" size={16} color={theme.colors.textSecondary} />
    </Pressable>
  );
}

export default function ListScreen() {
  const { cafes, setCafes } = useCafeStore();

  useEffect(() => {
    if (cafes.length === 0) {
      setCafes(cafesData);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cafes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CafeCard cafe={item} />}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    padding: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  cardPressed: {
    opacity: 0.7,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.text,
  },
  reviewCount: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
  },
  open: {
    color: theme.colors.success,
  },
  closed: {
    color: theme.colors.error,
  },
  separator: {
    height: theme.spacing.sm,
  },
});
