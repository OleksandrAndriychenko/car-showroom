import { SortOption, useVehicleFilterStore } from '@features/vehicle-filters/model/useVehicleFilterStore';
import style from './VehicleFilters.module.css';
import { Input } from '@shared/ui/Input/Input';
import { Button } from '@shared/ui/Button/Button';

interface VehicleFiltersProps {
    brands: string[];
};

export const VehicleFilters = ({ brands }: VehicleFiltersProps) => {
    const {
        searchQuery,
        sortBy,
        selectedBrand,
        setSearchQuery,
        setSortBy,
        setSelectedBrand,
        resetFilters,
    } = useVehicleFilterStore();

    return (
        <div className={style.container}>
            <div className={style.row}>
                <Input
                    label='Пошук авто'
                    placeholder='Марка, модель...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className={style.selectGroup}>
                    <label className={style.label}>Бренд</label>
                    <select
                        className={style.select}
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value='all'>Усі бренди</option>
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={style.selectGroup}>
                    <label className={style.label}>Сортування</label>
                    <select
                        className={style.select}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                    >
                        <option value='default'>За замовчуванням</option>
                        <option value='price-asc'>Спочатку дешевше</option>
                        <option value='price-desc'>Спочатку дорожче</option>
                        <option value='rating-desc'>За рейтингом</option>
                    </select>
                </div>

                <Button variant='outline' onClick={resetFilters}>
                    Скинути
                </Button>
            </div>
        </div>
    );
};
