"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionProduitModule = void 0;
const common_1 = require("@nestjs/common");
const gestion_produit_service_1 = require("./gestion-produit.service");
const gestion_produit_controller_1 = require("./gestion-produit.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const category_entity_1 = require("./entities/category.entity");
const platform_express_1 = require("@nestjs/platform-express");
let GestionProduitModule = class GestionProduitModule {
};
GestionProduitModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product, category_entity_1.Category]),
            platform_express_1.MulterModule.register({
                dest: "src/uploads"
            })
        ],
        controllers: [gestion_produit_controller_1.GestionProduitController],
        providers: [gestion_produit_service_1.GestionProduitService]
    })
], GestionProduitModule);
exports.GestionProduitModule = GestionProduitModule;
//# sourceMappingURL=gestion-produit.module.js.map