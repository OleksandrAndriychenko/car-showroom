import { apiClient } from "@shared/api/base";
import { Vehicle, VehiclesResponse } from "../model/types";
import { VEHICLES_CATEGORY } from "@shared/config/constants";

export const vehicleApi = {
    getVehicles: async (): Promise<VehiclesResponse> => {
        const response = await apiClient.get<VehiclesResponse>(
            `/products/category/${VEHICLES_CATEGORY}`
        );
        return response.data;
    },

    getVehicleById: async (id: number): Promise<Vehicle> => {
        const response = await apiClient.get<Vehicle>(`/products/${id}`);
        return response.data;
    }
};
