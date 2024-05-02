export interface TabProps {
    onType: (type: string) => void;
    value: string;
    items: { title: string; value: string }[];
}
