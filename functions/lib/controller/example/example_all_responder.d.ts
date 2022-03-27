import { Response } from 'express';
import { Example } from '../../domains/example/example';
export interface ExampleAllResponder {
    invoke(result: Promise<Example[]>, response: Response): void;
}
export declare class ExampleAllResponderImpl implements ExampleAllResponder {
    invoke(result: Promise<Example[]>, response: Response): void;
}
