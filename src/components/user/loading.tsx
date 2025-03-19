"use client";

import { Container, For, HStack, Skeleton, VStack } from "@chakra-ui/react";
import React from "react";

export default function LoadingUser() {
	return (
		<Container maxWidth={"6xl"} px={2}>
			<VStack gap={5}>
				<For each={[1, 2, 3, 4, 5]}>
					{(item: number) => (
						<HStack key={`loading-user-${item}`} gap={5} w={"100%"}>
							<Skeleton height={"44px"} width={"44px"} />
							<Skeleton height={5} width={"100%"} />
						</HStack>
					)}
				</For>
			</VStack>
		</Container>
	);
}
