"use client";

import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function UserSearch({ isLoading, onSearch }: { isLoading: boolean; onSearch: any }) {
	const [inputValue, setInputValue] = useState("");

	const handleInputValue = (e: any) => {
		const code = e.keyCode || e.charCode;
		if (code === 13) {
			e.preventDefault();
			e.stopPropagation();
			handleSearch();
		}
	};

	const handleSearch = () => {
		if (inputValue) onSearch(inputValue);
	};

	return (
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
	);
}
