import { gifService } from '@/services';

import GifUseCase from './GifUseCase';

export const gifUseCase = new GifUseCase(gifService);
