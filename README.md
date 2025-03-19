# GitHub User Search and Repositories Viewer

A responsive web application built with **React.js** and **Next.js** that leverages the GitHub API to search for users and display their repositories. This project was developed as a coding test for a Frontend Developer position and uses the **Accordion** component from **Chakra UI** to elegantly present repository details.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Possible Improvements](#possible-improvements)
- [Contact](#contact)

## Overview
This application allows users to:
- Search for GitHub users by entering a search key.
- View a list of GitHub users matching the search criteria.
- Click on a user to expand an accordion that shows the user’s public repositories.

The user interface is designed with Chakra UI to ensure a clean, responsive, and accessible experience.

## Features
- **User Search:** Fetches GitHub users based on a string search key.
- **Repository Display:** Upon clicking a user, their repositories are fetched and displayed.
- **Accordion UI:** Uses Chakra UI's Accordion for an intuitive, expandable layout.
- **Next.js Framework:** A powerful framework for building React applications, leveraging client-side rendering for dynamic and interactive content.
- **Responsive Design:** Fully responsive design to support different screen sizes.

## Tech Stack
- **React.js / Next.js:** Frontend framework for building the UI, primarily using client-side rendering to manage dynamic content.
- **Chakra UI:** Component library for React to build accessible and responsive layouts.
- **GitHub API:** Used for fetching user and repository data.
- **SWR/Fetch:** For making HTTP requests to the GitHub API.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rasyid18/github-explorer.git
   cd github-explorer
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
Open http://localhost:3000 in your browser to view the application.

## Usage
- **Search:** Use the search input at the top of the page to type in a GitHub username or keyword.
- **View Repositories:** Click on a user entry to expand the accordion and display a list of their repositories.
- **Navigation:** The design is kept simple and intuitive for a seamless user experience.

## API Integration
- **User Search:** Uses GitHub’s [Search Users API](https://docs.github.com/en/rest/reference/search#search-users) to find users based on the search key.
- **Repository Data:** Uses GitHub’s [List Repositories API](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user) to fetch repositories of the selected user.
- **Error Handling:** Includes basic error handling for API requests to ensure a smooth user experience.

## Possible Improvements
- **Pagination:** Add pagination or infinite scrolling for search results and repository lists.
- **User Details:** Expand user information (e.g., bio, followers, etc.) for a more detailed profile view.
- **Advanced Error Handling:** Improve error notifications for better user feedback.
- **Testing:** Integrate unit and end-to-end testing for improved reliability.

## Contact
If you have any questions or feedback, please feel free to reach out:
- **Name:** Harun Al Rasyid
- **Email:** work.rasyid@gmail.com
- **GitHub:** [@Rasyid18](https://github.com/Rasyid18)
