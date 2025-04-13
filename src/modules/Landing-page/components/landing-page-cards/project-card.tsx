'use client';

import { useState } from 'react';
import { Card, Title, Text, Badge, Flex, Button, Modal } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

interface ProjectCardProps {
    title: string;
    year: string;
    description: string;
    tags: string[];
    images?: string[]; // opcional, aqui você poderá colocar as imagens de cada projeto separadamente
}

export default function ProjectCard({ title, year, description, tags, images = [] }: ProjectCardProps) {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Card shadow="md" padding="lg" radius="md" style={{
                width: "100%",
                maxWidth: "400px",
                background: dark ? "#25262B" : "#f8f8f8",
                color: dark ? "#ddd" : "#444",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Flex direction="column" gap="sm">
                    <Title order={3} style={{ color: dark ? "#fff" : "#000", fontFamily: "var(--font-poppins), sans-serif" }}>
                        {title}
                    </Title>
                    <Text size="sm" color={dark ? "#aaa" : "#666"}>
                        {year}
                    </Text>
                    <Text size="md">
                        {description}
                    </Text>
                </Flex>

                <Flex gap="xs" wrap="wrap" style={{ marginTop: "1rem" }}>
                    {tags.map(tag => (
                        <Badge key={tag} color={dark ? "teal.7" : "teal.5"} variant="light">{tag}</Badge>
                    ))}
                </Flex>

                <Button variant="filled" color={dark ? "teal.7" : "teal.5"} onClick={() => setOpened(true)} style={{ marginTop: '1rem' }}>
                    Visualizar detalhes
                </Button>
            </Card>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
                size="lg"
                centered
                overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
            >
                <Flex direction="column" gap="md">
                    {images.length > 0 && (
                        <Carousel withIndicators height={250}>
                            {images.map((url, idx) =>
                                <Carousel.Slide key={idx}>
                                    <img src={url} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }} alt={`Projeto ${title} imagem ${idx + 1}`} />
                                </Carousel.Slide>
                            )}
                        </Carousel>
                    )}

                    <Text style={{ marginTop: "1rem" }}>{description}</Text>

                    <Flex gap="xs" wrap="wrap" style={{ marginTop: "1rem" }}>
                        {tags.map(tag => (
                            <Badge key={tag} color={dark ? "teal.7" : "teal.5"} variant="light">{tag}</Badge>
                        ))}
                    </Flex>
                </Flex>
            </Modal>
        </>
    )
}