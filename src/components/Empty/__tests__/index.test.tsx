import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Empty from '@/components/Empty';

describe('Test components: Empty', () => {
    const renderEmpty = () => render(<Empty />);

    it('Snapshot', () => {
        const { container } = renderEmpty();

        expect(container).toMatchSnapshot();
    });
});
