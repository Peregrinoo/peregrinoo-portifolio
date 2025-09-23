'use client';

import { Paper, Container, Flex, Title, Text, Anchor, ActionIcon } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { IconMail, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function LandingPageContact() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Paper style={{
            minHeight: "30vh",
            width: '100vw',
            background: dark ? "#1A1B1E" : "#ffffff",
            padding: "2rem",
            transition: "background-color 0.3s ease",
        }}>
            <Container style={{ maxWidth: 1500 }}>
                <Flex direction="column" gap="xl" align="center" justify="center">

                    <Title order={2} style={{
                        width: "100%",
                        textAlign: "start",
                        fontSize: "2rem",
                        fontFamily: "var(--font-poppins), sans-serif",
                        color: dark ? "#fff" : "#000",
                    }}>
                        Fale Comigo
                    </Title>

                    <Text size="md" style={{
                        color: dark ? "#ccc" : "#444",
                        fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                        Estou disponível para novos projetos e oportunidades. Sinta-se à vontade para entrar em contato comigo através das plataformas abaixo!
                    </Text>

                    <Flex gap="lg" align="center" justify="center">
                        <Anchor href="mailto:gabriel.ribeiro07@aluno.ifce.edu.br" target="_blank">
                            <ActionIcon variant="filled" color="teal" radius="xl" size="xl">
                                <IconMail size={24} />
                            </ActionIcon>
                        </Anchor>

                        <Anchor href="https://www.instagram.com/gabrielchaves.dev" target="_blank">
                            <ActionIcon variant="filled" color="teal" radius="xl" size="xl">
                                <IconBrandInstagram size={24} />
                            </ActionIcon>
                        </Anchor>

                        <Anchor href="https://www.linkedin.com/in/gabriel-chaves-13528a237/" target="_blank">
                            <ActionIcon variant="filled" color="teal" radius="xl" size="xl">
                                <IconBrandLinkedin size={24} />
                            </ActionIcon>
                        </Anchor>
                    </Flex>

                </Flex>
            </Container>
        </Paper>
    )
}
