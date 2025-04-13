'use client';

import { useState } from 'react';
import {
    Container,
    Group,
    ActionIcon,
    Select,
    Flex,
    Burger,
    Drawer,
    ScrollArea,
    useMantineColorScheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';
import './navbar.css';

export function Navbar() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const [language, setLanguage] = useState('pt');
    const [opened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const links = ['Sobre mim', 'Meus projetos', 'Recomendações', 'Contate-me'];

    const linksItems = links.map((link) => (
        <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
            className="navbar-link"
            onClick={closeDrawer}
        >
            {link}
        </a>
    ));

    return (
        <header className="navbar-header">
            <Container className="navbar-inner">
                <Flex align="center" justify="space-between" w="100%">

                    <Group className="navbar-placeholder" visibleFrom="sm">

                    </Group>

                    <Group className="navbar-links" visibleFrom="sm">
                        {linksItems}
                    </Group>

                    <Group visibleFrom="sm" style={{ paddingRight: '32px' }}>
                        <Select
                            data={[
                                { value: 'en', label: 'EN 🇺🇸' },
                                { value: 'pt', label: 'PT 🇧🇷' },
                            ]}
                            value={language}
                            onChange={(val) => setLanguage(val || 'pt')}
                            variant="filled"
                            size="sm"
                            style={{ width: '90px' }}
                            color="teal"
                        />

                        <ActionIcon
                            variant="outline"
                            color="teal"
                            onClick={() => toggleColorScheme()}
                            size="lg"
                            aria-label="Toggle theme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
                        </ActionIcon>
                    </Group>

                    <Burger opened={opened} onClick={toggleDrawer} size="sm" hiddenFrom="sm" />
                </Flex>
            </Container>

            <Drawer
                opened={opened}
                onClose={closeDrawer}
                size="80%"
                title="Menu"
                hiddenFrom="sm"
                padding="md"
            >
                <ScrollArea>
                    <Flex direction="column" gap="md" mt="md">
                        {linksItems}

                        <Select
                            data={[
                                { value: 'en', label: 'EN 🇺🇸' },
                                { value: 'pt', label: 'PT 🇧🇷' },
                            ]}
                            value={language}
                            onChange={(val) => setLanguage(val || 'pt')}
                            variant="filled"
                            size="md"
                            style={{ width: '100%', marginTop: 16 }}
                            color="teal"
                        />

                        <ActionIcon
                            variant="outline"
                            color="teal"
                            onClick={() => toggleColorScheme()}
                            size="xl"
                            aria-label="Toggle theme"
                            style={{ width: '100%', height: '48px' }}
                        >
                            {dark ? <IconSun size={24} /> : <IconMoon size={24} />}
                        </ActionIcon>
                    </Flex>
                </ScrollArea>
            </Drawer>
        </header>
    );
}