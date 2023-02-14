import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
export declare class GestionProduitService {
    private categoryRepository;
    private productRepository;
    constructor(categoryRepository: Repository<Category>, productRepository: Repository<Product>);
    createCategory(createCategoryDto: any, imageUploaded: any): Promise<Category>;
}
