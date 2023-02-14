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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async createUser(createUserDto) {
        const username = createUserDto.username;
        const existedUser = await this.usersRepository.createQueryBuilder("user")
            .where("user.username = :username", { username }).getOne();
        if (existedUser) {
            throw new common_1.ConflictException("there is a user existed with this username");
        }
        const user = this.usersRepository.create(Object.assign({}, createUserDto));
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            this.usersRepository.save(user);
        }
        catch (e) {
            throw new common_1.ConflictException('le username et le password doit etre unique.');
        }
        return await user;
    }
    async login(loginUserDto) {
        const { username, password } = loginUserDto;
        const user = await this.usersRepository.createQueryBuilder("user")
            .where("user.username = :username", { username }).getOne();
        if (!user) {
            throw new common_1.NotFoundException("uername does not exist !");
        }
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {
            const payload = {
                username,
                role: user.role
            };
            const jwt = await this.jwtService.sign(payload);
            return { "access_token": jwt };
        }
        else {
            throw new common_1.NotFoundException("the password is incorrect");
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map