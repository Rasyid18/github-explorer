"use client";

import {
	HStack,
	Skeleton,
} from "@chakra-ui/react";
import React from "react";

export default function LoadingUser() {
	return (
		<HStack gap={5} w={"100%"}>
			<Skeleton height={"44px"} width={"44px"} />
			<Skeleton height={5} width={"100%"} />
		</HStack>
	);
}
