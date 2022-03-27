import { Response } from 'express';
import { Example } from '../../domains/example/example';
export interface ExampleCreateResponder {
    invoke(result: Promise<Example | null>, response: Response): void;
}
export declare class ExampleCreateResponderImpl implements ExampleCreateResponder {
    invoke(result: Promise<Example | null>, response: Response): void;
}
