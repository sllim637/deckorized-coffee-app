import { StreamableFile } from "@nestjs/common";
export declare class GetCategoryDTO {
    constructor(id: any, name: string);
    categoryId: number;
    categoryName: string;
    categoryImage: StreamableFile;
}
