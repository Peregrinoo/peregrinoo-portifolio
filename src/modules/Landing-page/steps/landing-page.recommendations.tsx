'use client';

import { Paper, Container, Flex, Title } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import RecommendationCard
    from "@/modules/Landing-page/components/landing-page-recommendations-card/recommendation-card";

export default function LandingPageRecommendations() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const recommendations = [
        {
            image: "/recommendations/tiago_fachanha.png",
            name: "Tiago Façanha dos Santos",
            title: "Doutor em Teleinformática e Pesquisador no LIT-IFCE",
            recommendation: "Caba bom, pode contratar :)"
        },
    ];

    return (
        <Paper style={{
            minHeight: "40vh",
            background: dark ? "#1A1B1E" : "#ffffff",
            padding: "2rem",
            transition: "background-color 0.3s ease",
        }}>
            <Container style={{ maxWidth: 1500 }}>
                <Title
                    order={2}
                    style={{
                        fontSize: "2rem",
                        fontFamily: "var(--font-poppins), sans-serif",
                        marginBottom: "2rem",
                        color: dark ? "#fff" : "#000"
                    }}
                >
                    Recomendações
                </Title>

                <Flex gap="lg" justify="center" wrap="wrap">
                    {recommendations.map((item, index) => (
                        <RecommendationCard key={index} {...item} />
                    ))}
                </Flex>
            </Container>
        </Paper>
    )
}