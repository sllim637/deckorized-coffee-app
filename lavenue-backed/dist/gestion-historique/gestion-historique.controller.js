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
exports.GestionHistoriqueController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../user/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const create_historique_dto_1 = require("./dto/create-historique.dto");
const gestion_historique_service_1 = require("./gestion-historique.service");
let GestionHistoriqueController = class GestionHistoriqueController {
    constructor(gestionHistoriqueService) {
        this.gestionHistoriqueService = gestionHistoriqueService;
    }
    async addHistorique(createHistorique, user) {
        this.gestionHistoriqueService.add_update_History(createHistorique, user);
    }
    async getByDates(dateOfStart, dateOfEnd) {
        return this.gestionHistoriqueService.getHistoriqueByDates(dateOfStart, dateOfEnd);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("ajouterHistorique"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_historique_dto_1.CreateHistoriqueDTO,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], GestionHistoriqueController.prototype, "addHistorique", null);
__decorate([
    (0, common_1.Get)("getHistoriqueByDates/:dateOfStart/:DateOfEnd"),
    __param(0, (0, common_1.Param)("dateOfStart")),
    __param(1, (0, common_1.Param)("DateOfEnd")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Date]),
    __metadata("design:returntype", Promise)
], GestionHistoriqueController.prototype, "getByDates", null);
GestionHistoriqueController = __decorate([
    (0, common_1.Controller)('gestionHistorique'),
    __metadata("design:paramtypes", [gestion_historique_service_1.GestionHistoriqueService])
], GestionHistoriqueController);
exports.GestionHistoriqueController = GestionHistoriqueController;
//# sourceMappingURL=gestion-historique.controller.js.map