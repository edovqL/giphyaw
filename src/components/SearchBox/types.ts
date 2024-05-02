export interface SearchBoxProps {
    onSearch: (search: string) => void;
    onType: (type: string) => void;
    onClear: () => void;
    value: string;
}
