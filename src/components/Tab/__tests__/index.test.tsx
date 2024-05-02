import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Tab from '@/components/Tab';
import type { TabProps } from '@/components/Tab/types';

describe('Test components: Tab', () => {
    let props: TabProps;
    const renderTab = () => render(<Tab {...props} />);

    it('Snapshot', () => {
        const { container } = renderTab();

        expect(container).toMatchSnapshot();
    });
});
