export const theme = {
  colors: {
    background: "#171717",
    surface: "#262626",
    surfaceLight: "#404040",
    accent: "#f59e0b",
    accentLight: "#fbbf24",
    text: "#ffffff",
    textSecondary: "#a3a3a3",
    border: "#404040",
    success: "#22c55e",
    error: "#ef4444",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

export const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#212121" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2c2c2c" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
];
