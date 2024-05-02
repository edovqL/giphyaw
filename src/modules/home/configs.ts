import { TYPE } from '@/constants/types.ts';
import { StateType, TabListProps } from '@/modules/home/types.ts';

export const TAB_LIST: TabListProps[] = [
    { title: 'Categories', value: TYPE.CATEGORIES },
    { title: 'Trending', value: TYPE.TRENDING },
];

export const INITIAL_STATE: StateType = {
    search: '',
    type: 'search',
    limit: 10,
};
