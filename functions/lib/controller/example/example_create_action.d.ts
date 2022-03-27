import { Request, Response } from 'express';
import { ExampleService } from '../../domains/example/example_service';
import { ExamleTranslator } from '../../domains/example/example_translator';
import { ExampleCreateResponder } from './example_create_responder';
export declare class ExampleCreateAction {
    private responder;
    private service;
    private translator;
    constructor(responder: ExampleCreateResponder, service: ExampleService, translator: ExamleTranslator);
    invoke(req: Request, res: Response): void;
}
