import { useVehicles } from "@entities/vehicle/api/useVehicles";
import { getSimilarVehicles } from "@entities/vehicle/model/getSimilarVehicles";
import { Vehicle } from "@entities/vehicle/model/types";
import styles from './SimilarVehicles.module.css';
import { VehicleCard } from "../VehicleCard/VehicleCard";

interface SimilarVehiclesProps {
    currentVehicle: Vehicle;
}

export const SimilarVehicles = ({ currentVehicle }:SimilarVehiclesProps) => {
    const { data: allVehicles, isLoading } = useVehicles();

    if (isLoading || !allVehicles) {
        return null;
    }

    const similarVehicles = getSimilarVehicles(currentVehicle, allVehicles.products);

    if (similarVehicles.length === 0) {
        return null;
    }

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Вам також може сподобатися</h2>
            <div className={styles.grid}>
                {similarVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    )
}
