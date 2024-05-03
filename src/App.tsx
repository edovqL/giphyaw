import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QUERY_CLIENT_OPTIONS } from '@/constants/queryClient.ts';
import MessageProvider from '@/contexts/Message/provider';
import Home from '@/modules/home';

const App = () => {
    const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_OPTIONS));

    return (
        <QueryClientProvider client={queryClient}>
            <MessageProvider>
                <div className="flex justify-center items-center p-12">
                    <Home />
                </div>
            </MessageProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
