export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface Vehicle {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand?: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    images: string[];
    thumbnail: string;
}

export interface VehiclesResponse {
    products: Vehicle[];
    total: number;
    skip: number;
    limit: number;
}

export interface UserComment {
    id: string;
    vehicleId: number;
    author: string;
    text: string;
    rating: number;
    createdAt: string;
}