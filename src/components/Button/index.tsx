import { FC } from 'react';

import { ButtonProps } from '@/components/Button/types.ts';

const Button: FC<ButtonProps> = ({ title, onAction, disabled = false, isLoading }) => (
    <button disabled={isLoading || disabled} onClick={onAction} className="btn btn-active btn-primary items-center text-lg">
        {isLoading ? <span className="loading loading-spinner loading-sm"></span> : null} {title}
    </button>
);

export default Button;
