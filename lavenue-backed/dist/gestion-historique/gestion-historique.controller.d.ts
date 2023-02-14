import { User } from 'src/user/entities/user.entity';
import { CreateHistoriqueDTO } from './dto/create-historique.dto';
import { Historique } from './entities/historique.entity';
import { GestionHistoriqueService } from './gestion-historique.service';
export declare class GestionHistoriqueController {
    private readonly gestionHistoriqueService;
    constructor(gestionHistoriqueService: GestionHistoriqueService);
    addHistorique(createHistorique: CreateHistoriqueDTO, user: User): Promise<void>;
    getByDates(dateOfStart: Date, dateOfEnd: Date): Promise<Historique[]>;
}
