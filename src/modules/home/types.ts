export interface CatalogProps {
    gifs: Record<string, any>[];
    isPending: boolean;
    loadAction?: () => void;
}

export interface TabListProps {
    title: string;
    value: string;
}

export type StateType = {
    search: string;
    type: string;
    limit: number;
};
