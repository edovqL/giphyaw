import { useState } from 'react';

import Hero from '@/components/Hero';
import SearchBox from '@/components/SearchBox';
import Tab from '@/components/Tab';
import { useDebounce } from '@/hooks/useDebounce.tsx';
import { INITIAL_STATE, TAB_LIST } from '@/modules/home/configs.ts';
import { useGifsQuery } from '@/modules/home/hooks';
import Catalog from '@/modules/home/sections/Catalog.tsx';
import { StateType } from '@/modules/home/types.ts';

const Home = () => {
    const [state, setState] = useState<StateType>(INITIAL_STATE);

    const q = useDebounce(state.search, 500);

    const { data: gifs, isPending } = useGifsQuery({ search: q, type: state.type, limit: state.limit });

    const onReset = () => setState(INITIAL_STATE);

    const onChangeEvent = (value: unknown, name: string) => {
        setState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex flex-col gap-5 w-1/2">
            <Hero />
            <SearchBox
                value={state.search}
                onSearch={(value) => onChangeEvent(value, 'search')}
                onType={(value) => onChangeEvent(value, 'type')}
                onClear={onReset}
            />
            <Tab onType={(value) => onChangeEvent(value, 'type')} value={state.type} items={TAB_LIST} />
            <Catalog
                // @ts-ignore
                gifs={gifs?.data ?? []}
                // @ts-ignore
                showButton={gifs?.data?.length < gifs?.pagination?.total_count}
                loadButton={() => onChangeEvent(state.limit + 10, 'limit')}
                isPending={isPending}
            />
        </div>
    );
};

export default Home;
