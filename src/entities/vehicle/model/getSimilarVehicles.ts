import { Vehicle } from "./types";


export const getSimilarVehicles = (
    currentVehicle: Vehicle,
    allVehicles: Vehicle[],
    limit: number = 4
): Vehicle[] => {
    const PRICE_MARGIN = 0.25;

    const currentBodyTag = currentVehicle.tags?.find(tag => tag !== 'vehicles') || '';

    return allVehicles.filter((vehicle) => {
        if (vehicle.id === currentVehicle.id) return false;

        const vehicleBodyTag = vehicle.tags?.find(tag => tag !== 'vehicles') || '';
        const isSameType = currentBodyTag && vehicleBodyTag && currentBodyTag === vehicleBodyTag;

        const priceDiff = Math.abs(vehicle.price - currentVehicle.price);
        const maxDiff = currentVehicle.price * PRICE_MARGIN;
        const isClosePrice = priceDiff <= maxDiff;

        return isSameType || isClosePrice;
    })
        .slice(0, limit);
};