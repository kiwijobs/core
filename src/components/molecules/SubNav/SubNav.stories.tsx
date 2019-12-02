import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SubNav } from './SubNav';

storiesOf('Molecules|SubNav', module).add('Basic Sub Navigation', () => {
  const [active, setActive] = useState('Aktywne (12)');

  const items = ['Aktywne (12)', 'Archiwum', 'Szkice', 'Usunięte', 'Radek'];

  return (
    <SubNav>
      {items.map(x => (
        <SubNav.Button key={x} isActive={x === active} onClick={() => setActive(x)}>
          {x}
        </SubNav.Button>
      ))}
    </SubNav>
  );
});
