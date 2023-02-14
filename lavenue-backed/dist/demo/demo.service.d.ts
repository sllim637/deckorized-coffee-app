import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
export declare class DemoService {
    create(createDemoDto: CreateDemoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDemoDto: UpdateDemoDto): string;
    remove(id: number): string;
}
