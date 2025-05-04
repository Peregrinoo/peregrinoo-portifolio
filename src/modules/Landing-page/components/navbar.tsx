'use client';

import { useTranslation } from '@/hook/useTranslation';
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
    const { t, language, changeLanguage } = useTranslation();
    const [opened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const links = [
        t('navbar.about_me'),
        t('navbar.my_projects'),
        t('navbar.recommendations'),
        t('navbar.contact_me')
    ];

    const linksItems = (links as string[]).map((link, index) => {
        return (
            <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="navbar-link"
                onClick={closeDrawer}
            >
                {link}
            </a>
        );
    });

    return (
        <header className="navbar-header">
            <Container className="navbar-inner">
                <Flex align="center" justify="space-between" w="100%">
                    <Group className="navbar-links" visibleFrom="sm">
                        {linksItems}
                    </Group>

                    <Group visibleFrom="sm" style={{ paddingRight: '32px' }}>
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
                title={t('navbar.menuTitle')}
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
                            onChange={(val) => changeLanguage(val as 'en' | 'pt')}
                            variant="filled"
                            size="md"
                            style={{ width: '100%', marginTop: 16 }}
                            color="teal"
                        />
                    </Flex>
                </ScrollArea>
            </Drawer>
        </header>
    );
}
