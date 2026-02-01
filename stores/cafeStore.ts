import { create } from "zustand";
import { Cafe } from "@/types/cafe";
import cafesJson from "@/data/cafes.json";

export const cafesData = cafesJson as Cafe[];

interface CafeState {
  cafes: Cafe[];
  selectedCafe: Cafe | null;
  isLoading: boolean;
  setCafes: (cafes: Cafe[]) => void;
  selectCafe: (cafe: Cafe | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useCafeStore = create<CafeState>((set) => ({
  cafes: [],
  selectedCafe: null,
  isLoading: false,
  setCafes: (cafes) => set({ cafes }),
  selectCafe: (cafe) => set({ selectedCafe: cafe }),
  setLoading: (loading) => set({ isLoading: loading }),
}));

