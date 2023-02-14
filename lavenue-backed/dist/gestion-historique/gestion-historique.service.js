"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionHistoriqueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const historique_entity_1 = require("./entities/historique.entity");
const product_entity_1 = require("../gestion-produit/entities/product.entity");
let GestionHistoriqueService = class GestionHistoriqueService {
    constructor(historiqueRepository, productRepository) {
        this.historiqueRepository = historiqueRepository;
        this.productRepository = productRepository;
    }
    async add_update_History(createHistoriqueDTO, user) {
        for (let i = 0; i < createHistoriqueDTO.commands.length; i++) {
            let historique = new historique_entity_1.Historique();
            historique.dateOfCommand = createHistoriqueDTO.date;
            historique.userId = user.userId,
                historique.quantity = createHistoriqueDTO.commands[i].quantity;
            historique.product = await this.productRepository.findOne({ where: { productId: createHistoriqueDTO.commands[i].productId } });
            let fetchedHistory = await this.historiqueRepository.findOne({
                where: {
                    dateOfCommand: createHistoriqueDTO.date,
                    userId: user.userId,
                    product: historique.product
                }
            });
            if (!fetchedHistory) {
                await this.historiqueRepository.save(historique);
            }
            else {
                fetchedHistory.quantity += Number(historique.quantity);
                await this.historiqueRepository.update(fetchedHistory.historiqueId, fetchedHistory);
            }
        }
    }
    async getHistoriqueByDates(dateOfStart, dateOfEnd) {
        console.log("the dates are :", dateOfEnd, dateOfStart);
        let historiques = await this.historiqueRepository.find({
            where: {
                dateOfCommand: (0, typeorm_2.Between)(dateOfStart, dateOfEnd)
            }
        });
        return historiques;
    }
};
GestionHistoriqueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(historique_entity_1.Historique)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GestionHistoriqueService);
exports.GestionHistoriqueService = GestionHistoriqueService;
//# sourceMappingURL=gestion-historique.service.js.map