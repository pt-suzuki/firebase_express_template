import * as core from 'express-serve-static-core';
export declare class ExpressServer {
    private app;
    constructor();
    start(): void;
    getInstance(): core.Express;
    private initApp;
    private setRoter;
}
