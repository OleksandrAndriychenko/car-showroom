import { UserComment } from "@entities/vehicle/model/types";
import { LOCAL_STORAGE_COMMENTS_KEY } from "@shared/config/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CommentsState {
    comments: UserComment[];
    addComment: (comment: Omit<UserComment, 'id' | 'createdAt'>) => void;
    getCommentsByVehicleId: (vehicleId: number) => UserComment[];
}

export const useCommentsStore = create<CommentsState>()(
    persist(
        (set, get) => ({
            comments: [],
            addComment: (newCommetData) => {
                const newComment: UserComment = {
                    ...newCommetData,
                    id: crypto.randomUUID(),
                    createdAt: new Date().toISOString(),
                };
                set((state) => ({
                    comments: [newComment, ...state.comments],
                }));
            },
            getCommentsByVehicleId: (vehicleId: number) => {
                return get().comments.filter((item) => item.vehicleId === vehicleId);
            },
        }),
        {
            name: LOCAL_STORAGE_COMMENTS_KEY,
        }
    )
);
