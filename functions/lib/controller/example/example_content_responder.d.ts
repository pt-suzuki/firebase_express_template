import { Response } from 'express';
import { Example } from '../../domains/example/example';
export interface ExampleContentResponder {
    invoke(result: Promise<Example | null>, response: Response): void;
}
export declare class ExampleContentResponderImpl implements ExampleContentResponder {
    invoke(result: Promise<Example | null>, response: Response): void;
}
