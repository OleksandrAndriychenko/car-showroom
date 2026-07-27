import { useQuery } from "@tanstack/react-query";
import { VehiclesResponse } from "../model/types";
import { vehicleApi } from "./vehicleApi";

export const VEHICLES_QUERY_KEY = ['vehicles'];

export const useVehicles = () => {
    return useQuery<VehiclesResponse, Error>({
        queryKey: VEHICLES_QUERY_KEY,
        queryFn: vehicleApi.getVehicles,
        staleTime: 1000 * 60 * 10,
    });
};
