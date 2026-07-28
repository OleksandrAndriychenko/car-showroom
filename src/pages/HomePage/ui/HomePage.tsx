import { useVehicles } from "@entities/vehicle/api/useVehicles"
import { useVehicleFilterStore } from "@features/vehicle-filters/model/useVehicleFilterStore";
import { useMemo } from "react";
import styles from './HomePage.module.css';
import { Vehicle } from "@entities/vehicle/model/types";
import { VehicleFilters } from "@features/vehicle-filters/ui/VehicleFilters/VehicleFilters";
import { VehicleCard } from "@entities/vehicle/ui/VehicleCard/VehicleCard";

export const HomePage = () => {
    const { data, isLoading, isError, error } = useVehicles();
    const { searchQuery, sortBy, selectedBrand } = useVehicleFilterStore();
    console.log(data)

    const brands = useMemo(() => {
        if (!data?.products) return [];
        const set = new Set<string>();
        data.products.forEach((item) => {
            if (item.brand) set.add(item.brand);
        });
        return Array.from(set);
    }, [data]);

    const filteredVehicles = useMemo(() => {
        if (!data?.products) return [];

        return data.products.filter((item: Vehicle) => {
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesBrand = selectedBrand === 'all' || item.brand === selectedBrand;

            return matchesSearch && matchesBrand;
        }).sort((a: Vehicle, b: Vehicle) => {
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price = a.price;
            if (sortBy === 'rating-desc') return b.rating - a.rating;
            return 0;
        });
    }, [data, searchQuery, selectedBrand, sortBy]);

    if (isLoading) {
        return <div className={styles.loading}>Завантаження каталогу автомобілів...</div>
    }

    if (isError) {
        return (
            <div className={styles.error}>
                Помилка під час завантаження даних: {error?.message || 'Невідома помилка'};
            </div>
        );
    }


    return (
        <>
            <VehicleFilters brands={brands} />
            {filteredVehicles.length === 0 ? (
                <div className={styles.empty}>Автомобілі не знайдено</div>
            ) : (
                <div className={styles.grid}>
                    {filteredVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            )}
        </>
    );
};
