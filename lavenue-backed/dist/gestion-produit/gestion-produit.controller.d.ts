import { Category } from './entities/category.entity';
import { GestionProduitService } from './gestion-produit.service';
export declare class GestionProduitController {
    private readonly gestionProduitService;
    constructor(gestionProduitService: GestionProduitService);
    create(createCategoryDto: any, image: any): Promise<Category>;
}
