"use client";

import { Accordion, Avatar, HStack } from "@chakra-ui/react";
import React from "react";
import RepositoriesList from "../repo/list";

export default function UserList({ user }: { user: any }) {
	return (
		<Accordion.Item value={user.id}>
			<Accordion.ItemTrigger>
				<Avatar.Root size={"lg"} shape={"rounded"}>
					<Avatar.Image src={user.avatar_url} />
					<Avatar.Fallback name={user.login} />
				</Avatar.Root>
				<HStack flex={1}>{user.login}</HStack>
				<Accordion.ItemIndicator />
			</Accordion.ItemTrigger>
			<Accordion.ItemContent>
				<Accordion.ItemBody>
					<RepositoriesList id={user.id} user={user.login} />
				</Accordion.ItemBody>
			</Accordion.ItemContent>
		</Accordion.Item>
	);
}
