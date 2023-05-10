# Game Grotto

<div className='w-24 h-24'>
  <img src='/public/assets/scream.png'>
</div>

A website where you can browse video games across all platforms and popular genres.

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=21223e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![Three.js](https://img.shields.io/badge/-Three.js-000000?logo=threedotjs&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Three.js-000000?logo=express&logoColor=white&style=for-the-badge)

## Features

This website includes the following features:

Genre search: You can search for games by genre.
Popular games: A multi-carousel with some of the most popular games being played.
Latest Updates: A carousel of the most recently updated games
Game modals: A modal with screenshots, trailers, summaries, developers, and tags for the game
User account and wishlist: You can sign in with an account to save your favorite games to a wishlist

## Installation

To run this website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js and MongoDB if you haven't already.
3. Open a terminal window in the project directory.
4. Run the following command to install the required packages:

```
npm install
```

5. Create a config file in the project directory with the following contents:

- clientID: clientID from AuthO
- secret: secret from AuthO
- domain: domain from AuthO
- key: key from RAWG API
- port: 3000

6. Start webpack

```
npm run start
```

7. Start the server by running the following command:

```
npm run server-dev
```

Open a web browser and go to http://localhost:3000 to view the website.
