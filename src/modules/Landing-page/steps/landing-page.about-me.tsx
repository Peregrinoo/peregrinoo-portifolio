'use client';

import { Paper, Container, Title, Text, Flex, Badge, Divider } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";

export default function LandingPageAboutMe() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const techSkills = {
        "Frontend": ["HTML", "CSS", "Javascript", "Typescript", "React", "NextJS", "Tailwind", "Mantine-UI", "Chackra-UI"],
        "Backend": ["NestJS", "Springboot", "Docker"],
        "Mobile": ["Flutter", "Flutter WEB", "GetX", "Dart", "Kotlin", "Java", "C#"],
        "Design UI/UX": ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Sketch"],
    };

    const renderBadges = (skills: string[]) => {
        return skills.map(skill => (
            <Badge key={skill} color={dark ? "teal.7" : "teal.5"} variant="light" radius="sm" size="md">
                {skill}
            </Badge>
        ));
    };

    return (
        <Paper
            style={{
                width: "100%",
                minHeight: "20vh",
                background: dark ? "#1A1B1E" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "2rem",
                transition: "background-color 0.3s ease",
            }}
        >
            <Container style={{ maxWidth: 1500 }}>
                <Flex direction="column" align="flex-start" gap="lg">
                    <Title
                        order={2}
                        style={{
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: dark ? "#fff" : "#000",
                        }}
                    >
                        Sobre Mim
                    </Title>

                    <Text
                        style={{
                            fontFamily: "var(--font-raleway), sans-serif",
                            fontSize: "1.2rem",
                            lineHeight: 1.7,
                            color: dark ? "#ddd" : "#444",
                            marginBottom: "1rem",
                        }}
                    >
                        Meu nome é Gabriel Chaves, nasci e me criei em Ceará, Fortaleza. Desde muito novo desenvolvi uma paixão por computação, paixão pela qual fez com que eu me aventurasse em vários meios, desde diagramação de websites até desenvolvimento de modelos de inteligência artificial complexas. Sou apaixonado pelo o que eu faço {"<3"}
                    </Text>

                    <Divider my="sm" color={dark ? "#444" : "#ccc"} w={"100%"} />

                    <Title
                        order={3}
                        style={{
                            fontFamily: "var(--font-poppins), sans-serif",
                            color: dark ? "#fff" : "#000",
                            marginTop: "0.5rem",
                            marginBottom: "1rem",
                        }}
                    >
                        Competências Técnicas
                    </Title>

                    {Object.entries(techSkills).map(([category, skills]) => (
                        <Flex direction="column" align="flex-start" gap="sm" key={category}>
                            <Text
                                style={{
                                    fontFamily: "var(--font-poppins), sans-serif",
                                    fontWeight: "600",
                                    fontSize: "1.1rem",
                                    color: dark ? "#aaa" : "#555",
                                }}
                            >
                                {category}
                            </Text>
                            <Flex gap="xs" wrap="wrap">
                                {renderBadges(skills)}
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Container>
        </Paper>
    )
}