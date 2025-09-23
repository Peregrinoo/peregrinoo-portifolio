'use client';

import Image from "next/image";
import perfil from "../../../../public/perfil.jpeg";
import { Paper, Container, Title, Flex, Badge, Group } from "@mantine/core";
import {
    IconPalette,
    IconCode,
    IconServer,
    IconChevronDown,
    IconBrain,
    IconRobotFace,
} from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import "../styles/landing-page.style.css";

export default function LandingPagePresentation() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const skills = [
        { label: "Designer UI/UX", icon: IconPalette, color: "teal" },
        { label: "Frontend", icon: IconCode, color: "teal" },
        { label: "Backend", icon: IconServer, color: "teal" },
        { label: "Machine Learning", icon: IconBrain, color: "teal" },
        { label: "Deep Learning", icon: IconRobotFace, color: "teal" },
    ];

    return (
        <Paper
            className="paper-container"
            style={{
                width: "100%",
                maxWidth: "100vw", // garante que não passe da tela
                minHeight: "93vh",
                background: dark ? "#1A1B1E" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                transition: "background-color 0.3s ease",
                flexDirection: "column",
                overflowX: "hidden", // evita scroll lateral
            }}
        >
            <Container
                style={{
                    width: "100%",
                    maxWidth: "1200px", // limite visual para não estourar
                    margin: "0 auto",
                    overflow: "hidden",
                }}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="center"
                    gap={{ base: "2rem", md: "4rem" }} // responsivo, sem valores fixos absurdos
                    wrap="wrap"
                    style={{ width: "100%" }}
                >
                    {/* Foto com animação */}
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

                    {/* Textos & Skills */}
                    <Flex
                        direction="column"
                        gap="xs"
                        align={{ base: "center", md: "flex-start" }}
                        style={{
                            maxWidth: "600px",
                            width: "100%",
                            textAlign: "left",
                            color: dark ? "#ccc" : "#333",
                            wordWrap: "break-word", // evita quebrar layout
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

                        <span
                            style={{
                                fontFamily: "var(--font-raleway), sans-serif",
                                fontSize: "1rem",
                                color: dark ? "#aaa" : "#555",
                                marginTop: "0.5rem",
                                display: "inline-block",
                            }}
                        >
              Engenheiro de software
            </span>

                        <Flex
                            gap="md"
                            wrap="wrap"
                            style={{ marginTop: "1rem", maxWidth: "100%" }}
                        >
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
