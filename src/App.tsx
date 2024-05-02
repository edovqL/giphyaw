import { useState } from 'react';

import { QueryClient, type QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import MessageProvider from '@/contexts/Message/provider';
import Home from '@/modules/home';

const queryClientOptions: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        },
    },
};
const App = () => {
    const [queryClient] = useState(() => new QueryClient(queryClientOptions));

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
