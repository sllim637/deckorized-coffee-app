import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHistoriqueDTO } from './dto/create-historique.dto';
import { Historique } from './entities/historique.entity';
import { Product } from 'src/gestion-produit/entities/product.entity';
export declare class GestionHistoriqueService {
    private historiqueRepository;
    private productRepository;
    constructor(historiqueRepository: Repository<Historique>, productRepository: Repository<Product>);
    add_update_History(createHistoriqueDTO: CreateHistoriqueDTO, user: User): Promise<void>;
    getHistoriqueByDates(dateOfStart: Date, dateOfEnd: Date): Promise<Historique[]>;
}
