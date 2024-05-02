import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MOCK_GIFS } from '@/domains/__mocks__/Gif';
import type * as MockHttpClient from '@/services/adapters/__mocks__/HttpClient';
import * as HttpClient from '@/services/adapters/HttpClient';

import { gifUseCase } from '..';

vi.mock('@/services/adapters/HttpClient');

const { mockGet } = HttpClient as typeof MockHttpClient;

const mockParams = {
    type: 'categories',
};

describe('@/useCases: GifUseCase', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('getAll with Pagination : should return response correctly', async () => {
        mockGet.mockImplementation(() => Promise.resolve(MOCK_GIFS));

        const result = await gifUseCase.getAll(mockParams);

        expect(result).toMatchObject(MOCK_GIFS);
    });

    it('getAll with Pagination: should return object empty when not have data', async () => {
        mockGet.mockImplementation(() =>
            Promise.resolve({
                data: [],
                meta: {},
                pagination: {},
            })
        );

        const result = await gifUseCase.getAll(mockParams);

        expect(result).toMatchObject({});
    });
});
