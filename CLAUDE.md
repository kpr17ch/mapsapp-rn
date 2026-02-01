# CaféMap

iOS App für Café-Discovery. Fokus auf schnelles Finden guter Cafés in der Nähe mit minimalistischem Dark UI.

## Vision & Differenzierung

- **Ziel**: Schnellster Weg zum nächsten guten Café
- **Differenzierung zu Google Maps**: Nur Cafés, kein Clutter. Kuratierte Daten statt alles.
- **Zielgruppe**: Kaffee-Enthusiasten, Remote Worker, Reisende

## Tech Stack

| Kategorie | Technologie | Version |
|-----------|-------------|---------|
| Framework | Expo SDK | 54 |
| Router | Expo Router | 6 (typed routes) |
| UI | React Native | 0.81.5 |
| React | React | 19.1.0 |
| Styling | NativeWind (Tailwind) | 4.2.1 |
| State | Zustand | 5 |
| Maps | react-native-maps | 1.20.1 (Apple Maps auf iOS) |
| Location | expo-location | 19 |

## Datenarchitektur

### MVP (jetzt)
- Mock-Daten in `data/cafes.json`
- Lokaler State mit Zustand

### Später
- **Café-Daten**: Outscraper API (Google Places Scraping)
- **Backend**: Supabase (Auth, DB, Edge Functions)
- **Caching**: AsyncStorage für Offline-Support

## Design System

### Dark Theme (Default)

```
Background:     bg-neutral-950 (#0a0a0a)
Surface:        bg-neutral-900 (#171717)
Surface Elevated: bg-neutral-800 (#262626)
Border:         border-neutral-700 (#404040)

Text Primary:   text-white
Text Secondary: text-neutral-400
Text Muted:     text-neutral-500

Accent:         amber-500 (#f59e0b)
Accent Hover:   amber-400 (#fbbf24)
```

### Typography

```
Heading:    text-2xl font-bold
Subheading: text-lg font-semibold
Body:       text-base
Caption:    text-sm text-neutral-400
```

### Spacing

- Container Padding: `p-4`
- Card Padding: `p-3`
- Gap zwischen Elementen: `gap-3` oder `gap-4`
- Border Radius: `rounded-xl` (Cards), `rounded-full` (Buttons/Chips)

### Component Patterns

- Buttons/Links: immer `cursor-pointer` und `active:opacity-70`
- Cards: `bg-neutral-900 rounded-xl p-3`
- Icons: Ionicons via `@expo/vector-icons`

## Projektstruktur

```
mapsapp-rn/
├── app/                    # Expo Router Pages
│   ├── (tabs)/            # Tab Navigator
│   │   ├── index.tsx      # Map View (Home)
│   │   ├── list.tsx       # List View
│   │   └── _layout.tsx    # Tab Layout
│   ├── cafe/[id].tsx      # Café Detail
│   └── _layout.tsx        # Root Layout
├── components/            # Wiederverwendbare UI
│   ├── CafeCard.tsx
│   ├── CafeMarker.tsx
│   ├── SearchBar.tsx
│   └── ...
├── stores/                # Zustand Stores
│   ├── cafeStore.ts       # Café-Daten & Filter
│   └── locationStore.ts   # User Location
├── services/              # API Calls
├── types/                 # TypeScript Types
│   └── cafe.ts
├── constants/             # Theme, Config
├── hooks/                 # Custom Hooks
└── data/                  # Mock-Daten (MVP)
    └── cafes.json
```

## Konventionen

- **Komponenten**: PascalCase, eine Komponente pro Datei
- **Hooks**: `use`-Prefix, in `hooks/` Ordner
- **Types**: in `types/` Ordner, keine `any`
- **Stores**: Zustand stores in `stores/` Ordner
- **Keine Kommentare** - Code soll selbsterklärend sein

## MVP Features

1. **Karten-View** - Café-Pins auf Apple Maps, User Location
2. **Listen-View** - Cafés sortiert nach Entfernung
3. **Café-Detail** - Name, Adresse, Rating, Öffnungszeiten, Fotos
4. **Orts-Suche** - Suche nach Stadt/Adresse
5. **Dark Theme** - Durchgängig dunkles UI

## Commands

```bash
npx expo start              # Dev Server (Expo Go)
npx expo start --dev-client # Dev Server (Dev Build)
npx expo run:ios            # Native iOS Build
npm run lint                # ESLint
```

## Roadmap (nach MVP)

- [ ] Favoriten mit Supabase Sync
- [ ] Filter (Rating, Öffnungszeiten, Features)
- [ ] Echte Café-Daten via Outscraper
- [ ] Offline-Support
- [ ] Sharing
