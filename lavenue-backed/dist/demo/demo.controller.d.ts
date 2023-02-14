import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
export declare class DemoController {
    private readonly demoService;
    constructor(demoService: DemoService);
    create(createDemoDto: CreateDemoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDemoDto: UpdateDemoDto): string;
    remove(id: string): string;
}
