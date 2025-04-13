'use client';

import { Card, Avatar, Text, Flex } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";

interface RecommendationCardProps {
    image: string;
    name: string;
    title: string;
    recommendation: string;
}

export default function RecommendationCard(
    { image, name, title, recommendation }: RecommendationCardProps
) {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <Card shadow="sm" padding="lg" radius="md" style={{
            width: "320px",
            background: dark ? "#25262B" : "#f8f8f8",
            color: dark ? "#ddd" : "#444"
        }}>
            <Flex gap="md" direction="column" align="center">
                <Avatar src={image} alt={name} radius="xl" size="xl" />

                <Flex direction="column" align="center" gap="xs">
                    <Text size="lg" fw={600} style={{ color: dark ? "#fff" : "#000", fontFamily: "var(--font-poppins)" }}>
                        {name}
                    </Text>

                    <Text size="sm" color={dark ? "#aaa" : "#555"}>
                        {title}
                    </Text>
                </Flex>

                <Text size="sm" style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
                    {recommendation}
                </Text>
            </Flex>
        </Card>
    )
}