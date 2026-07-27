import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../model/types";
import { vehicleApi } from "./vehicleApi";

export const vehicleQueryKey = (id: number) => ['vehicle', id];

export const useVehicle = (id: number) => {
    return useQuery<Vehicle, Error>({
        queryKey: vehicleQueryKey(id),
        queryFn: () => vehicleApi.getVehicleById(id),
        enabled: !isNaN(id) && id > 0,
        staleTime: 1000 * 60 * 10,
    });
};