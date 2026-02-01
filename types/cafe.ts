export interface Cafe {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  rating?: number;
  reviewCount?: number;
  priceLevel?: number;
  openNow?: boolean;
  openingHours?: string[];
  photos?: string[];
  description?: string;
  phone?: string;
  website?: string;
}
