"use client";

import UserList from "@/components/user/list";
import LoadingUser from "@/components/user/loading";
import UserSearch from "@/components/user/search";
import fetchData from "@/utils/fetchData";
import { Accordion, Container, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr";

export default function Page() {
	const [search, setSearch] = useState("");

	const { data, error, isLoading } = useSWR(
		search ? `https://api.github.com/search/users?q=${encodeURIComponent(search)} in:login&per_page=5&page=1` : null,
		fetchData
	);

	const handleSearch = (value: string) => {
		if (value) setSearch(value);
	};

	return (
		<VStack>
			<UserSearch isLoading={isLoading} onSearch={handleSearch} />
			{error && <Text>Something went wrong: {error.message}</Text>}
			{isLoading && <LoadingUser />}
			{!isLoading && !data && <Text>There's no user with that search key, update search to show result</Text>}
			{!isLoading && data && data.errors?.length > 0 && <Text>{data.errors[0].message}</Text>}
			{!isLoading &&
				data &&
				(data.items?.length > 0 ? (
					<Container maxWidth={"6xl"} px={2}>
						<Accordion.Root collapsible lazyMount unmountOnExit>
							{data.items.map((item: any, index: number) => (
								<UserList key={`user-info-${index}`} user={item} />
							))}
						</Accordion.Root>
					</Container>
				) : (
					data.items?.length == 0 && <Text>There's no user with that search key, update search to show result</Text>
				))}
		</VStack>
	);
}
