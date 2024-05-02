import { FC } from 'react';

import { TabProps } from '@/components/Tab/types.ts';

const Tab: FC<TabProps> = ({ onType, value, items = [] }) => (
    <div role="tablist" className="tabs tabs-boxed">
        {items.map((item) => (
            <a key={item.value} role="tab" className={`tab ${value === item.value ? 'tab-active' : ''}`} onClick={() => onType(item.value)}>
                {item.title}
            </a>
        ))}
    </div>
);

export default Tab;
