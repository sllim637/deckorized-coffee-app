"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDemoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_demo_dto_1 = require("./create-demo.dto");
class UpdateDemoDto extends (0, swagger_1.PartialType)(create_demo_dto_1.CreateDemoDto) {
}
exports.UpdateDemoDto = UpdateDemoDto;
//# sourceMappingURL=update-demo.dto.js.map