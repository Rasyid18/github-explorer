"use client";

import { Badge, Box, Card, For, Group, Icon, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GoStar } from "react-icons/go";
import useSWR from "swr";
import LoadingRepositories from "./loading";

async function fetchData(url: string) {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/vnd.github+json, application/json",
			"User-Agent": "Github-Explorer/1.0",
		},
	};

	return await fetch(url, options).then((r) => r.json());
}

export default function RepositoriesList({ id, user }: { id: number; user: string }) {
	const { data, error, mutate, isLoading } = useSWR(`https://api.github.com/users/${encodeURIComponent(user)}/repos`, fetchData);

	return (
		<Box>
			{isLoading && (
				<SimpleGrid columns={{ md: 3, smDown: 1 }} gap={5}>
					<For each={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>{(item: number) => <LoadingRepositories key={`loading-repo-${item}`} />}</For>{" "}
				</SimpleGrid>
			)}
			{!isLoading && (
				<SimpleGrid columns={{ md: 3, smDown: 1 }} gap={5}>
					{data.length > 0 ? (
						data.map((item: any, index: number) => (
							<Card.Root key={`card-repo-${index}`}>
								<Card.Header>
									<Link href={item.html_url} target="_blank" lineClamp={1}>
										{item.full_name}
									</Link>
								</Card.Header>
								<Card.Body>
									<Stack>
										<Text lineClamp={2}>{item.description}</Text>
										<Stack direction={"row"} gap={1}>
											{item.language && (
												<Group attached>
													<Badge variant={"solid"} colorPalette={"green"}>
														Language
													</Badge>
													<Badge variant={"solid"}>{item.language}</Badge>
												</Group>
											)}
											{item.stargazers_count > 0 && (
												<Group attached>
													<Badge variant={"solid"} colorPalette={"orange"}>
														<Icon>
															<GoStar />
														</Icon>
													</Badge>
													<Badge variant={"solid"}>{item.stargazers_count}</Badge>
												</Group>
											)}
										</Stack>
									</Stack>
								</Card.Body>
							</Card.Root>
						))
					) : (
						<Text>No Repository Found!</Text>
					)}
				</SimpleGrid>
			)}
		</Box>
	);
}
