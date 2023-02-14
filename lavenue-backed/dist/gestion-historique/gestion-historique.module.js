"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionHistoriqueModule = void 0;
const common_1 = require("@nestjs/common");
const gestion_historique_service_1 = require("./gestion-historique.service");
const gestion_historique_controller_1 = require("./gestion-historique.controller");
const typeorm_1 = require("@nestjs/typeorm");
const historique_entity_1 = require("./entities/historique.entity");
const product_entity_1 = require("../gestion-produit/entities/product.entity");
let GestionHistoriqueModule = class GestionHistoriqueModule {
};
GestionHistoriqueModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([historique_entity_1.Historique, product_entity_1.Product
            ])],
        controllers: [gestion_historique_controller_1.GestionHistoriqueController],
        providers: [gestion_historique_service_1.GestionHistoriqueService],
    })
], GestionHistoriqueModule);
exports.GestionHistoriqueModule = GestionHistoriqueModule;
//# sourceMappingURL=gestion-historique.module.js.map