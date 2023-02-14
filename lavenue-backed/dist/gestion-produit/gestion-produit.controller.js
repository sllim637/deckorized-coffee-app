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
exports.GestionProduitController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const gestion_produit_service_1 = require("./gestion-produit.service");
let GestionProduitController = class GestionProduitController {
    constructor(gestionProduitService) {
        this.gestionProduitService = gestionProduitService;
    }
    async create(createCategoryDto, image) {
        return this.gestionProduitService.createCategory(createCategoryDto, image);
    }
};
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './files',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const fileName = `${file.originalname}-${uniqueSuffix}${ext}`;
                callback(null, fileName);
            }
        })
    })),
    (0, common_1.Post)("/createCategory"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GestionProduitController.prototype, "create", null);
GestionProduitController = __decorate([
    (0, common_1.Controller)('productManagement'),
    __metadata("design:paramtypes", [gestion_produit_service_1.GestionProduitService])
], GestionProduitController);
exports.GestionProduitController = GestionProduitController;
//# sourceMappingURL=gestion-produit.controller.js.map