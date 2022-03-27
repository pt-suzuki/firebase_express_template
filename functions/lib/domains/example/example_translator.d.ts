import { Request } from 'express';
import { Example } from './example';
export interface ExamleTranslator {
    translateRequestToContent(req: Request): Example;
    translateRequestToId(request: Request): number;
}
export declare class ExamleTranslatorImpl implements ExamleTranslator {
    translateRequestToContent(req: Request): Example;
    translateRequestToId(req: Request): number;
}
