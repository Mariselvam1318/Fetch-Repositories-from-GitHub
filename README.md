# GitHub Repositories Fetcher

## Overview

This web application allows users to fetch and display GitHub repositories for a specified GitHub username. It uses the GitHub API to retrieve repository data and displays it in a user-friendly format.

## Features

- **Fetch Repositories:** Allows users to enter a GitHub username and fetch their repositories.
- **Display Repository Details:** Shows details for each repository including name, description, URL, owner, and creation date.
- **Responsive Design:** Utilizes Bootstrap for styling to ensure a responsive design across different devices.

## Prerequisites

- **Web Browser:** A modern web browser to run the application.
- **Internet Connection:** Required for fetching data from the GitHub API and for loading external CSS from CDN.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
2.**Navigate to the Project Directory:**

```bash
cd <project-directory>
```
3.**Open the Project:**
Open `index.html` in your preferred web browser.
## Files

*   `**index.html**`: Contains the HTML structure of the application including form and container for displaying repository details.
*   `**style.css**`: Contains custom CSS styles for the application (if used).
*   `**script.js**`: Contains JavaScript code for fetching and displaying repository data from GitHub.

## Usage

1.  **Open the Application:**
2.  Open `index.html` in a web browser.
3.  **Fetch Repositories:**

*   Enter a GitHub username in the input field.
*   Click "Search" to fetch the repositories.
*   Repository details will be displayed below the form.

1.  **View Repository Details:**

*   Repository name
*   Description (if available)
*   URL to the repository
*   Repository owner
*   Creation date

## Code Explanation

### HTML

*   `**index.html**`: Sets up the layout and form for entering a GitHub username and displays repository details using Bootstrap for styling.

### CSS

*   `**style.css**` (if used): Provides custom styling, including the background gradient for the page.

### JavaScript

*   `**script.js**`: Handles fetching and displaying repository data.
*   `**fetchrepo(event)**`: Fetches repository data from GitHub API and handles errors.
*   `**displayRepoDetails(data)**`: Displays repository details in the `repoDetails` div.


**Sample Output :**

  **Repository Name**

**Description:** Repository description

**URL:** \[Repository URL\]

**Owner**: Repository owner

**Created at:** Repository creation date

\-----------------------------

##
