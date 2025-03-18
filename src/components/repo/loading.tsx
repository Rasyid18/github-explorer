"use client";

import { Card, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

export default function LoadingRepositories() {
	return (
		<Card.Root>
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
	);
}
