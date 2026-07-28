import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVehicle } from '@entities/vehicle/api/useVehicle';
import { VehicleGallery } from '@entities/vehicle/ui/VehicleGallery/VehicleGallery';
import { VehicleSpecs } from '@entities/vehicle/ui/VehicleSpecs/VehicleSpecs';
import { VehicleReviews } from '@entities/vehicle/ui/VehicleReviews/VehicleReviews';
import { useCommentsStore } from '@features/add-comment/model/useCommentsStore';
import { Card } from '@shared/ui/Card/Card';
import { Review } from '@entities/vehicle/model/types';
import styles from './VehiclePage.module.css';
import { AddCommentsForm } from '@features/add-comment/ui/AddCommentForm/AddCommentForm';
import { SimilarVehicles } from '@entities/vehicle/ui/SimilarVehicles/SimilarVehicles';

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
        return <div className={styles.loading}>Загрузка информации об авто...</div>;
    }

    if (isError || !vehicle) {
        return (
            <div className={styles.error}>
                {error?.message || 'Автомобиль не найден'}
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
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>
                ← Назад до каталогу
            </Link>

            <div className={styles.galleryWrapper}>
                <VehicleGallery images={vehicle.images} title={vehicle.title} />
            </div>

            <div className={styles.headerInfo}>
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

            <div className={styles.descriptionBlock}>
                <h3 className={styles.blockTitle}>Опис</h3>
                <p className={styles.description}>{vehicle.description}</p>
            </div>

            <Card>
                <div style={{ padding: 'var(--space-md)' }}>
                    <VehicleSpecs vehicle={vehicle} />
                </div>
            </Card>

            <div className={styles.section}>
                <AddCommentsForm vehicleId={vehicleId} />
                <VehicleReviews reviews={allReviews} />
            </div>

            <SimilarVehicles currentVehicle={vehicle} />
        </div>
    );
};