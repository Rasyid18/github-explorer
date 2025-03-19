"use client";

import { Card, For, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

export default function LoadingRepositories() {
	return (
		<SimpleGrid columns={{ md: 3, smDown: 1 }} gap={5}>
			<For each={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>
				{(item: number) => (
					<Card.Root key={`loading-repo-${item}`}>
						<Card.Header>
							<Skeleton height={5} width={"100%"} />
						</Card.Header>
						<Card.Body>
							<Stack flex="1">
								<Skeleton height="5" />
								<Skeleton height="5" width="80%" />
							</Stack>
						</Card.Body>
					</Card.Root>
				)}
			</For>
		</SimpleGrid>
	);
}
