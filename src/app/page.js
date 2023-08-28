"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating </Title>
      <Rating defaultValue={5} size="lg"/>

      <Textarea 
        mt="xs"
        label = "Your review "
        placeholder="Do you enjoy eating?"
        minRows={3}
        
    />
    <Button mt="xs" color="orange" >Submit Review</Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4} position="center">Elon Musk</Title>
        <Rating defaultValue={5} readOnly size="sm"/>
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4} position="center">Mark Zuck</Title>
        <Rating defaultValue={4} readOnly size="sm"/>
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>

    <Pagination Pagination total={20} position="center" color="orange" mt="md"/>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Sippakon Khammisawang 650610813
      </Text>
    </Container>
  );
}
