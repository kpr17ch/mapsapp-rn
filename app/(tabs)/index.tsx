import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useCafeStore, cafesData } from "@/stores/cafeStore";
import { theme, mapStyle } from "@/constants/theme";

export default function MapScreen() {
  const { cafes, setCafes } = useCafeStore();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setCafes(cafesData);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={theme.colors.accent} />
      </View>
    );
  }

  const initialRegion = {
    latitude: 50.1109,
    longitude: 8.6821,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
        customMapStyle={mapStyle}
      >
        {cafes.map((cafe) => (
          <Marker
            key={cafe.id}
            coordinate={{ latitude: cafe.latitude, longitude: cafe.longitude }}
            title={cafe.name}
            description={cafe.address}
            pinColor={theme.colors.accent}
            onCalloutPress={() => router.push(`/cafe/${cafe.id}`)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
