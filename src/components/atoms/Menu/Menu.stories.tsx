import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container, List, Backdrop } from '..';
import { Menu } from './Menu';
import { Input } from '../../molecules';

storiesOf('Atoms/Menu', module)
  .add('Simple Menu', () => (
    <Container marginY={3}>
      <Menu
        placement={{
          autoAdjust: true,
          preferX: 'RIGHT',
        }}
        layer={props => <Box {...props}>Menu content</Box>}
        trigger={
          <Box display="inline-block" px="1" py="2">
            Basic menu
          </Box>
        }
      />
    </Container>
  ))
  .add('Menu list', () => (
    <Container marginY={3}>
      <Menu
        placement={{
          autoAdjust: true,
          preferX: 'RIGHT',
        }}
        layer={props => (
          <List {...props}>
            <List.Item>Lista ofert</List.Item>
            <List.Item>Lista spotkań</List.Item>
            <List.Item>Dostęp</List.Item>
            <List.Item>Profil</List.Item>
            <List.Item>Rekruterzy</List.Item>
          </List>
        )}
        trigger={
          <Box display="inline-block" px="1" py="2" bg="coolGreyTwo">
            |
          </Box>
        }
      />
    </Container>
  ))
  .add('With Adjusting Placement', () => (
    <Container marginY={3}>
      <Box
        bg="white"
        width={[1, 0.5]}
        padding={2}
        textAlign="center"
        height="200vh"
        overflowY="scroll"
        position="relative"
      >
        <Menu
          placement={{
            anchor: 'BOTTOM_CENTER',
            possibleAnchors: ['TOP_CENTER', 'BOTTOM_CENTER'],
            autoAdjust: true,
          }}
          trigger={
            <Box display="inline-block" px="3" py="2" mt="90vh">
              Menu
            </Box>
          }
          layer={props => (
            <List {...props}>
              <List.Item>Lista ofert</List.Item>
              <List.Item>Lista spotkań</List.Item>
              <List.Item>Dostęp</List.Item>
              <List.Item>Profil</List.Item>
              <List.Item>Rekruterzy</List.Item>
            </List>
          )}
        />
      </Box>
    </Container>
  ))
  .add('With Scroll Lock', () => (
    <Container marginY={3}>
      <Box
        bg="white"
        width={[1, 0.5]}
        padding={2}
        textAlign="center"
        height="200vh"
        overflowY="scroll"
        position="relative"
      >
        <Menu
          placement={{
            anchor: 'BOTTOM_CENTER',
            possibleAnchors: ['TOP_CENTER', 'BOTTOM_CENTER'],
            autoAdjust: true,
          }}
          trigger={
            <Box display="inline-block" px="3" py="2" mt="90vh">
              Menu
            </Box>
          }
          layer={props => (
            <>
              <List {...props}>
                <List.Item>Lista ofert</List.Item>
                <List.Item>Lista spotkań</List.Item>
                <List.Item>Dostęp</List.Item>
                <List.Item>Profil</List.Item>
                <List.Item>Rekruterzy</List.Item>
              </List>
              <Backdrop />
            </>
          )}
        />
      </Box>
    </Container>
  ))
  .add('With Custom Input', () => {
    const [search, setSearch] = useState('');

    const options = ['Lista ofert', 'Lista spotkań', 'Dostęp', 'Profil', 'Rekruterzy']
      .filter(x => x.indexOf(search) > -1)
      .map(x => (search ? x.split(search).join(`<b>${search}</b>`) : x));

    return (
      <Container my={3}>
        <Menu
          placement={{
            triggerOffset: -20,
          }}
          trigger={({ triggerRef, isOpen, open }) => (
            <Input
              label="Jakies opcje"
              position="relative"
              sx={{
                zIndex: isOpen ? 1 : 0,
                borderBottomLeftRadius: isOpen ? 0 : 1,
                borderBottomRightRadius: isOpen ? 0 : 1,
              }}
              ref={triggerRef}
              onClick={open}
              value={search}
              onChange={event => setSearch(event.currentTarget.value)}
            />
          )}
          layer={({ close, isOpen, triggerRect, sx, ...layerProps }) =>
            !isOpen ? (
              <></>
            ) : (
              <>
                <List
                  {...layerProps}
                  sx={{
                    ...sx,
                    borderTopLeftRadius: isOpen ? 0 : 1,
                    borderTopRightRadius: isOpen ? 0 : 1,
                  }}
                >
                  {options.map((x: string) => (
                    <List.Item key={x}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: x,
                        }}
                      />
                    </List.Item>
                  ))}
                </List>
                <Backdrop />
              </>
            )
          }
        />
      </Container>
    );
  });
