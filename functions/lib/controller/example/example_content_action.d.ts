import { Request, Response } from 'express';
import { ExampleService } from '../../domains/example/example_service';
import { ExamleTranslator } from '../../domains/example/example_translator';
import { ExampleContentResponder } from './example_content_responder';
export declare class ExampleContentAction {
    private responder;
    private service;
    private translator;
    constructor(responder: ExampleContentResponder, service: ExampleService, translator: ExamleTranslator);
    invoke(req: Request, res: Response): void;
}
