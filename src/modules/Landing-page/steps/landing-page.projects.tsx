'use client';

import { Paper, Container, Flex, Title } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import ProjectCard from "@/modules/Landing-page/components/landing-page-cards/project-card";

export default function LandingPageProjects() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const projects = [
        {
            title: "SGR",
            year: "2024 - 2025",
            description: "Sistema inovador para gestão e monitoramento de medidores de energia. Criação completa de frontend, backend e comunicação via LoRaWAN com microcontrolador, utilizando React e Chackra-UI no frontend e NestJS com arquitetura limpa no backend.",
            tags: ["React", "Chackra-UI", "NestJS", "LoRaWAN"]
        },
        {
            title: "NTN",
            year: "2024 - 2025",
            description: "Sistema para monitoramento via NTN (Non-Terrestrial Networks). Construí frontend com NextJS e Mantine-UI e backend com NestJS seguindo boas práticas e arquitetura limpa, além da integração completa com redes NTN.",
            tags: ["NextJS", "Mantine-UI", "NestJS", "NTN"]
        },
        {
            title: "IOB",
            year: "2023 - 2024",
            description: "Sistema de monitoramento e gestão de bovinos. Atuei como voluntário na construção do frontend da aplicação, utilizando React e abordando as melhores práticas do mercado.",
            tags: ["React", "Chackra-UI", "IOT"]
        },
        {
            title: "GAAV – Polícia Militar",
            year: "2023 - 2024",
            description: "Aplicação para geração e validação de PDFs via GOV.BR, usando Flutter e armazenamento dos dados com Firebase.",
            tags: ["Flutter", "Firebase"]
        },
        {
            title: "SINCRO",
            year: "2023 - 2025",
            description: "Sistema para gestão de silos com captura e exibição de dados via dashboard. Frontend com Flutter Web, backend em Springboot.",
            tags: ["Flutter Web", "Springboot", "IoT"]
        }
    ];

    return (
        <Paper style={{
            minHeight: "40vh",
            background: dark ? "#1A1B1E" : "#ffffff",
            padding: "2rem",
            transition: "background-color 0.3s ease",
        }}>
            <Container style={{ maxWidth: 1500 }}>
                <Title order={2} style={{ fontSize: "2rem", fontFamily: "var(--font-poppins), sans-serif", marginBottom: "2rem", color: dark ? "#fff" : "#000" }}>
                    Meus Projetos
                </Title>

                <Flex gap="lg" justify="center" wrap="wrap">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </Flex>

            </Container>
        </Paper>
    )
}