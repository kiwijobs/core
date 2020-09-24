import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button, Icon, Avatar } from '../../atoms';

storiesOf('Molecules/Navbar', module).add('Basic Navbar', () => {
  const items = ['Lista ofert', 'Lista spotkań', 'Lista szczegółów', 'Lista rekruterów'];
  const [active, setActive] = useState('Lista ofert');

  // Inverted is supposted to overwrite dark theme to light. It might come bundled in.
  const navbar = (inverted: boolean) => (
    <Navbar sx={{ ...(inverted && { bg: 'white', color: '1' }) }}>
      <Navbar.Logo />
      <Navbar.Container>
        {items.map(x => (
          <Navbar.Item
            active={active === x}
            onClick={() => setActive(x)}
            key={x}
            children={x}
            sx={{ ...(inverted && { '&:hover': { color: 'primary' } }) }}
          />
        ))}
        <Button
          variant="Text"
          sx={{
            color: 'primary',
            display: 'flex',
            alignItems: 'center',
            ml: 'auto',
            '&:hover': { color: inverted ? 1 : 'white' },
          }}
        >
          <Icon
            name="Add"
            sx={{ borderRadius: '50%', border: 1, borderColor: 'inherit', mr: 2, size: '16px' }}
          />
          Dodaj nowe spotkanie
        </Button>
      </Navbar.Container>

      <Avatar sx={{ mx: 4 }} size="40px" src="https://www.placecage.com/40/40" />
      <Icon size="20px" name="Hamburger" />
    </Navbar>
  );

  return (
    <>
      {navbar(false)}
      <br />
      {navbar(true)}
    </>
  );
});
