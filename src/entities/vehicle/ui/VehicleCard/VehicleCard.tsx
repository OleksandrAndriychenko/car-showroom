import { Vehicle } from '@entities/vehicle/model/types';
import styles from './VehicleCard.module.css';
import { Card } from '@shared/ui/Card/Card';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
    vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
    return (
        <Card hoverable>
            <Link to={`/vehicle/${vehicle.id}`} className={styles.Link}>
                <div className={styles.imageWrapper}>
                    <img
                        src={vehicle.thumbnail || vehicle.images[0]}
                        alt={vehicle.title}
                        className={styles.image}
                        loading='lazy'
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{vehicle.title}</h3>
                    <p className={styles.description}>{vehicle.description}</p>
                    <div className={styles.footer}>
                        <span className={styles.price}>${vehicle.price.toLocaleString()}</span>
                        <div className={styles.rating}>
                            ★ <span>{vehicle.rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </Card>
    );
};
