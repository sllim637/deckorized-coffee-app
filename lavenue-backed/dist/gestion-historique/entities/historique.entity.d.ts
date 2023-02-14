import { Product } from "src/gestion-produit/entities/product.entity";
export declare class Historique {
    historiqueId: number;
    product: Product;
    dateOfCommand: Date;
    quantity: number;
    userId: number;
}
