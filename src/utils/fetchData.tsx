"use client";

export default async function fetchData(url: string) {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/vnd.github+json, application/json",
			"User-Agent": "Github-Explorer/1.0",
		},
	};

	return await fetch(url, options).then((r) => r.json());
}
