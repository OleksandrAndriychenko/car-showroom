import { Link, useParams } from 'react-router-dom';
import styles from './VehiclePage.module.css';
import { useVehicle } from '@entities/vehicle/api/useVehicle';
import { VehicleGallery } from '@entities/vehicle/ui/VehicleGallery/VehicleGallery';
import { Card } from '@shared/ui/Card/Card';
import { VehicleSpecs } from '@entities/vehicle/ui/VehicleSpecs/VehicleSpecs';
import { VehicleReviews } from '@entities/vehicle/ui/VehicleReviews/VehicleReviews';
import { Review } from '@entities/vehicle/model/types';
import { useCommentsStore } from '@features/add-comment/model/useCommentsStore';
import { AddCommentsForm } from '@features/add-comment/ui/AddCommentForm/AddCommentForm';
import { useMemo } from 'react';

export const VehiclePage = () => {
    const { id } = useParams<{ id: string }>();
    const vehicleId = Number(id);

    const { data: vehicle, isLoading, isError, error } = useVehicle(vehicleId);

    const comments = useCommentsStore((state) => state.comments);
    

    const localComments = useMemo(
        () => comments.filter((comment) => comment.vehicleId === vehicleId),
        [comments, vehicleId]
    );
    
    if (isLoading) {
        return <div className={styles.loading}>Завантаження інформації про автомобіль...</div>
    }

    if (isError || !vehicle) {
        return (
            <div className={styles.error}>
                {error?.message || 'Автомобіль не знайдено'}
            </div>
        );
    }

    const mappedLocalReviews: Review[] = localComments.map((comment) => ({
        reviewerName: comment.author,
        rating: comment.rating,
        comment: comment.text,
        date: comment.createdAt,
        reviewerEmail: '',
    }));

    const allReviews: Review[] = [...mappedLocalReviews, ...vehicle.reviews];

    return (
        <>
            <Link to='/' className={styles.backLink}>
                ← Назад до каталогу
            </Link>
            <div className={styles.grid}>
                <VehicleGallery images={vehicle.images} title={vehicle.title} />
                
                <div className={styles.details}>
                    <div>
                        <h1 className={styles.title}>{vehicle.title}</h1>
                        <div className={styles.priceRow}>
                            <span className={styles.price}>
                                ${vehicle.price.toLocaleString()}
                            </span>
                            <span className={styles.rating}>
                                ★ {vehicle.rating.toFixed(1)}
                            </span>
                        </div>
                    </div>

                    <p className={styles.description}>{vehicle.description}</p>
                    <Card>
                        <div style={{ padding: 'var(--space-md)' }}>
                            <VehicleSpecs vehicle={vehicle} />
                        </div>
                    </Card>
                </div>
            </div>
            <div className={styles.section}>
                <AddCommentsForm vehicleId={vehicleId} />
                <VehicleReviews reviews={allReviews} />
            </div>
        </>
    );
};
