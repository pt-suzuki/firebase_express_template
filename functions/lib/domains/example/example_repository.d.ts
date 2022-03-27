import { Example } from './example';
import { ExamleTranslator } from './example_translator';
export interface ExamleRepository {
    search(): Promise<Example[]>;
    content(id: number): Promise<Example>;
    create(content: Example): Promise<Example>;
}
export declare class ExamleRepositoryImpl implements ExamleRepository {
    constructor(_: ExamleTranslator);
    search(): Promise<Example[]>;
    content(id: number): Promise<Example>;
    create(content: Example): Promise<Example>;
}
