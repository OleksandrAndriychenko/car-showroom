import { Vehicle } from '@entities/vehicle/model/types';
import styles from './VehicleSpecs.module.css';

interface VehicleSpecsProps {
    vehicle: Vehicle
}

export const VehicleSpecs = ({ vehicle }: VehicleSpecsProps) => {
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
                    <span className={styles.label}>Гарантія</span>
                    <span className={styles.value}>{vehicle.warrantyInformation}</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Доставка</span>
                    <span className={styles.value}>{vehicle.shippingInformation}</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Наявність на складі</span>
                    <span className={styles.value}>{vehicle.stock} шт.</span>
                </div>
            </div>
        </div>
    );
};
