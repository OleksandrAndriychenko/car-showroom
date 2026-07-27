import { useState } from "react";
import styles from './VehicleGallery.module.css';
import clsx from "clsx";

interface VehicleGalleryProps {
    images: string[];
    title: string;
}
export const VehicleGallery = ({ images, title }: VehicleGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0] || '');

    if (!images.length) return null;
    return (
        <div className={styles.gallery}>
            <div className={styles.mainImageWrapper}>
                <img src={selectedImage} alt={title} className={styles.mainImages} />
            </div>
            {images.length > 1 && (
                <div className={styles.thumbnails}>
                    {images.map((img, index) => (
                        <button
                            key={index}
                            className={clsx(
                                styles.thumbButton,
                                selectedImage === img && styles.active
                            )}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img} alt={`${title} ${index + 1}`} className={styles.thumbImage} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
