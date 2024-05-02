import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useMessageContext } from '@/contexts/Message/context';
import { PaginateRequestType } from '@/domains/Response.ts';
import { gifUseCase } from '@/useCases';

export const useGifsQuery = (params: PaginateRequestType) => {
    const { showErrorMessage } = useMessageContext();

    const query = useQuery({
        queryKey: ['gifUseCase.getAll', params],
        queryFn: async () => await gifUseCase.getAll(params),
    });

    useEffect(() => {
        if (query.isError) {
            showErrorMessage({ message: 'Oops, something went wrong!' });
        }
    }, [query.isError]);

    return query;
};
