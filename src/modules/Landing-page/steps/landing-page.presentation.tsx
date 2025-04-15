'use client';

import Image from "next/image";
import perfil from "../../../../public/perfil.jpeg";
import {Paper, Container, Title, Flex, Badge, Group} from "@mantine/core";
import {
    IconPalette,
    IconCode,
    IconServer,
    IconBrain, IconChevronDown,
} from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import { TypeAnimation } from 'react-type-animation';
import '../styles/landing-page.style.css';
export default function LandingPagePresentation() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const skills = [
        { label: "Designer UI/UX", icon: IconPalette, color: "teal" },
        { label: "Frontend", icon: IconCode, color: "teal" },
        { label: "Backend", icon: IconServer, color: "teal" },
        { label: "Machine Learning", icon: IconBrain, color: "teal" },
    ];

    return (
        <Paper
            className="paper-container"
            style={{
                width: "100%",
                minHeight: "93vh",
                background: dark ? "#1A1B1E" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                transition: "background-color 0.3s ease",
                flexDirection: "column"
            }}
        >
            <Container style={{ maxWidth: 1200 }}>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="center"
                    gap="100px"
                    wrap="wrap"
                >
                    {/* Foto com animação drop-and-up */}
                    <Image
                        className="drop-and-up"
                        src={perfil}
                        alt="Foto de Perfil"
                        width={350}
                        height={350}
                        style={{
                            borderRadius: "100%",
                            maxWidth: "100%",
                            height: "auto",
                            flexShrink: 0,
                        }}
                    />

                    {/* Textos & Skills para a Direita com animação */}
                    <Flex
                        direction="column"
                        gap={'xs'}
                        align={{ base: "center", md: "flex-start" }}
                        style={{
                            maxWidth: "600px",
                            textAlign: "left",
                            color: dark ? "#ccc" : "#333",
                        }}
                        className="drop-and-up delay-1"
                    >
                        <Title
                            order={1}
                            style={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                                color: dark ? "#fff" : "#000",
                            }}
                        >
                            Gabriel Chaves
                        </Title>

                        {/* Animation escrita estilo maquina de escrever */}
                        <TypeAnimation
                            sequence={[
                                'Software Engineer and Researcher at LIT-IFCE',
                                1500,
                                'More than an engineer.',
                                1500,
                                'More than a developer.',
                                1500,
                                'An artist in every line of code.',
                                1500,
                            ]}
                            wrapper="span"
                            speed={30}
                            deletionSpeed={60}
                            repeat={Infinity}
                            style={{
                                fontFamily: "var(--font-raleway), sans-serif",
                                fontSize: "1rem",
                                color: dark ? "#aaa" : "#555",
                                marginTop: '0.5rem',
                                display: "inline-block",
                            }}
                        />

                        {/* Skills */}
                        <Flex gap="md" wrap="wrap" style={{ marginTop: '1rem' }}>
                            {skills.map((skill) => (
                                <Badge
                                    key={skill.label}
                                    color={skill.color}
                                    size="lg"
                                    leftSection={<skill.icon size={16} />}
                                >
                                    {skill.label}
                                </Badge>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>

                {/* Setinha animada */}
                <Group className="animated-arrow">
                    <IconChevronDown size={48} color={dark ? "#aaa" : "#555"} />
                </Group>

            </Container>

        </Paper>
    );
}