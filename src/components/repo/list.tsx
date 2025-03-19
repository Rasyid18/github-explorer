"use client";

import { Badge, Box, Card, Group, Icon, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GoStar } from "react-icons/go";
import useSWR from "swr";
import LoadingRepositories from "./loading";
import fetchData from "@/utils/fetchData";

export default function RepositoriesList({ user }: { user: string }) {
	const { data, error, isLoading } = useSWR(`https://api.github.com/users/${encodeURIComponent(user)}/repos`, fetchData);

	return (
		<Box>
			{isLoading && <LoadingRepositories />}
			{error && <Text>Something went wrong: {error.message}</Text>}
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
