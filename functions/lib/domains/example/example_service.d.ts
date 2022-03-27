import { Example } from './example';
import { ExamleRepository } from './example_repository';
import { ExamleTranslator } from './example_translator';
export interface ExampleService {
    search(): Promise<Example[]>;
    content(id: number): Promise<Example>;
    create(content: Example): Promise<Example>;
}
export declare class ExampleServiceImpl {
    private repository;
    constructor(_: ExamleTranslator, repository: ExamleRepository);
    search(): Promise<Example[]>;
    content(id: number): Promise<Example>;
    create(content: Example): Promise<Example>;
}
