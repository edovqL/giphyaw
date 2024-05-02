import { GIPHY_API_KEY } from '@/constants/configs.ts';
import { type GifType } from '@/domains/Gif';
import { type PaginateRequestType } from '@/domains/Response';
import type HttpClient from '@/services/adapters/HttpClient';

export interface GifServiceType {
    getAll(params: PaginateRequestType): Promise<GifType>;
}

class GifService implements GifServiceType {
    private _http: HttpClient;

    constructor(httpClient: HttpClient) {
        this._http = httpClient;
    }

    getAll: GifServiceType['getAll'] = ({ type = 'search', search, limit = 10, ...params }) => {
        return this._http.get(`/v1/gifs/${type}`, {
            params: { ...params, limit, q: search, api_key: GIPHY_API_KEY },
        });
    };
}

export default GifService;
