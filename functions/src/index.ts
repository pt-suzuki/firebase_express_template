import * as functions from 'firebase-functions';
import './config/env';
import { ExpressServer } from './server';

const server = new ExpressServer();

// NOTE: /apiとcsvダウンロードのためにメモリ上限を増加
const cpExtendRuntimeOption: functions.RuntimeOptions = {
  memory: '2GB',
  timeoutSeconds: 60,
};

export const api = functions
  .runWith(cpExtendRuntimeOption)
  .region('asia-northeast1')
  .https.onRequest(server.getInstance());
