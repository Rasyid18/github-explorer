"use client";

import UserList from "@/components/user/list";
import LoadingUser from "@/components/user/loading";
import { Accordion, Button, Container, For, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr";

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

export default function Page() {
	const [inputValue, setInputValue] = useState("");
	const [search, setSearch] = useState("");

	const { data, error, mutate, isLoading } = useSWR(
		search ? `https://api.github.com/search/users?q=${encodeURIComponent(search)} in:login&per_page=5&page=1` : null,
		fetchData
	);

	const handleInputValue = (e: any) => {
		let code = e.keyCode || e.charCode;
		if (code === 13) {
			e.preventDefault();
			e.stopPropagation();
			handleSearch();
		}
	};

	const handleSearch = () => {
		if (inputValue) setSearch(inputValue);
	};

	return (
		<VStack>
			<HStack>
				<Input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleInputValue}
					placeholder="Search Key"
				/>
				<Button disabled={isLoading} onClick={handleSearch}>
					Search
				</Button>
			</HStack>
			{error && <Text>Error: {error.message}</Text>}
			{isLoading && (
				<Container maxWidth={"6xl"} px={2}>
					<VStack gap={5}>
						<For each={[1, 2, 3, 4, 5]}>{(item: number) => <LoadingUser key={`loading-user-${item}`} />}</For>
					</VStack>
				</Container>
			)}
			{!isLoading && !data && <Text>Click to generate</Text>}
			{!isLoading && data && (
				<Container maxWidth={"6xl"} px={2}>
					<Accordion.Root collapsible lazyMount unmountOnExit>
						{data.items.map((item: any, index: number) => (
							<UserList key={`user-info-${index}`} user={item} />
						))}
					</Accordion.Root>
				</Container>
			)}
		</VStack>
	);
}
