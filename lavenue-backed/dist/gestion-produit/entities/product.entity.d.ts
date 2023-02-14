import { Category } from "./category.entity";
export declare class Product {
    categoryId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    devise: string;
    category: Category;
}
