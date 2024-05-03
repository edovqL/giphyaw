import { TYPE } from '@/constants/types.ts';
import type { PaginateRequestType } from '@/domains/Response';
import type { GifServiceType } from '@/services/GifService';

export interface GifUseCaseType {
    getAll(params: PaginateRequestType): Promise<unknown>;
}

class GifUseCase implements GifUseCaseType {
    private _gifService: GifServiceType;

    constructor(gifService: GifServiceType) {
        this._gifService = gifService;
    }

    getAll: GifUseCaseType['getAll'] = async (params) => {
        const { type } = params;

        const response = await this._gifService.getAll(params);

        if (type !== TYPE.CATEGORIES)
            return {
                ...response,
                data: response.data.map((gif) => ({
                    gif: gif,
                })),
            };
        return response;
    };
}

export default GifUseCase;
