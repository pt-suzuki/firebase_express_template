import { Request, Response } from 'express';
import { ExampleService } from '../../domains/example/example_service';
import { ExamleTranslator } from '../../domains/example/example_translator';
import { ExampleAllResponder } from '../../controller/example/example_all_responder';
export declare class ExampleAllAction {
    private responder;
    private service;
    constructor(responder: ExampleAllResponder, service: ExampleService, _: ExamleTranslator);
    invoke(_: Request, res: Response): void;
}
