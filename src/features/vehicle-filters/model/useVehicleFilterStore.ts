import { create } from "zustand";


export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc';

interface VehicleFilterState {
    searchQuery: string;
    sortBy: SortOption;
    selectedBrand: string;
    setSearchQuery: (query: string) => void;
    setSortBy: (sort: SortOption) => void;
    setSelectedBrand: (brand: string) => void;
    resetFilters: () => void;
}

const initialState = {
    searchQuery: '',
    sortBy: 'default' as SortOption,
    selectedBrand: 'all',
};


export const useVehicleFilterStore = create<VehicleFilterState>((set) => ({
    ...initialState,
    setSearchQuery: (searchQuery: string) => set({ searchQuery }),
    setSortBy: (sortBy: SortOption) => set({ sortBy }),
    setSelectedBrand: (selectedBrand: string) => set({ selectedBrand }),
    resetFilters: () => set(initialState),
}));
