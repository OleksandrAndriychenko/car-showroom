import { Review } from '@entities/vehicle/model/types';
import styles from './VehicleReviews.module.css';

interface VehicleReviewsProps {
    reviews: Review[];
};

export const VehicleReviews = ({ reviews }: VehicleReviewsProps) => {
    if (!reviews || reviews.length === 0) return null;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Відгуки покупців ({reviews.length})</h3>
            <div className={styles.list}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.reviewItem}>
                        <div className={styles.header}>
                            <span className={styles.author}>{review.reviewerName}</span>
                            <span className={styles.rating}>★ {review.rating}</span>
                        </div>
                        <p className={styles.comment}>{review.comment}</p>
                        <span className={styles.date}>
                            {new Date(review.date).toLocaleDateString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};