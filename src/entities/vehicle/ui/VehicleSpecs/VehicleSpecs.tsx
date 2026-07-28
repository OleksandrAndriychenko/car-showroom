import { Vehicle } from '@entities/vehicle/model/types';
import styles from './VehicleSpecs.module.css';

interface VehicleSpecsProps {
    vehicle: Vehicle;
}

export const VehicleSpecs = ({ vehicle }: VehicleSpecsProps) => {
    const formattedPrice = vehicle.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className={styles.specs}>
            <h3 className={styles.title}>Характеристики</h3>
            
            <div className={styles.list}>
                {vehicle.brand && (
                <div className={styles.item}>
                    <span className={styles.label}>Бренд</span>
                    <span className={styles.value}>{vehicle.brand}</span>
                </div>
                )}

                <div className={styles.item}>
                    <span className={styles.label}>Артикул (SKU)</span>
                    <span className={styles.value}>{vehicle.sku}</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Категорія</span>
                    <span className={styles.value}>{vehicle.category}</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Рейтинг</span>
                    <span className={styles.value}>⭐ {vehicle.rating} / 5</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Ціна</span>
                    <span className={styles.value}>{formattedPrice}</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Статус наявності</span>
                    <span className={styles.value}>{vehicle.availabilityStatus}</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Залишок на складі</span>
                    <span className={styles.value}>{vehicle.stock} шт.</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Мін. замовлення</span>
                    <span className={styles.value}>{vehicle.minimumOrderQuantity} шт.</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Вага</span>
                    <span className={styles.value}>{vehicle.weight} кг</span>
                </div>

                {vehicle.dimensions && (
                <div className={styles.item}>
                    <span className={styles.label}>Габарити (Ш × В × Г)</span>
                    <span className={styles.value}>
                        {vehicle.dimensions.width} × {vehicle.dimensions.height} × {vehicle.dimensions.depth} см
                    </span>
                </div>
                )}

                <div className={styles.item}>
                    <span className={styles.label}>Гарантія</span>
                    <span className={styles.value}>{vehicle.warrantyInformation}</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Доставка</span>
                    <span className={styles.value}>{vehicle.shippingInformation}</span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>Умови повернення</span>
                    <span className={styles.value}>{vehicle.returnPolicy}</span>
                </div>
            </div>
        </div>
    );
};