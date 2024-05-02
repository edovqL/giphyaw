import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from '@/components/Button';
import type { ButtonProps } from '@/components/Button/types';

describe('Test components: Button', () => {
    let props: ButtonProps;
    const renderButton = () => render(<Button {...props} />);

    it('Snapshot', () => {
        const { container } = renderButton();

        expect(container).toMatchSnapshot();
    });
});
