export interface ButtonProps {
    title: string;
    onAction: () => void;
    disabled?: boolean;
    isLoading: boolean;
}
