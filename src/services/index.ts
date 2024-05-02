import GifService from '@/services/GifService';

import HttpClient from './adapters/HttpClient';

const httpClient = new HttpClient();

export const gifService = new GifService(httpClient);
