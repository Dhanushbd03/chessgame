# Chess Website

## Overview

This is a real-time chess website supporting two-player games. It is built using modern web technologies, including React for the frontend, WebSocket for real-time communication, Vite.js for development, and Node.js for the backend. The website is designed with a focus on providing an excellent user experience, offering a seamless and interactive interface for players.
Here's an image section you can add to your README:

![preview](./screenshots/preview.png)

---
## Features

- **Real-Time Gameplay**: Play chess in real-time with another player.
- **React Frontend**: A responsive and interactive user interface built with React.
- **WebSocket Communication**: Real-time communication between players using WebSocket.
- **Node.js Backend**: A robust backend to manage game state and player interactions.
- **Vite.js**: Fast and optimized development experience with Vite.js.
- **User Experience**: Designed with a strong focus on usability and aesthetics.

## Technologies Used

- **Frontend**:
  - React
  - TailwindCSS (for styling)
  - Vite.js (for fast development)

- **Backend**:
  - Node.js
  - WebSocket (for real-time communication)

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- **Nodemon** (for automatic server restarts during development) 

### Clone the Repository

```bash
git clone https://github.com/Dhanushbd03/chessgame.git
cd chessgame
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Running the Project

1. **Start the Backend Server**:

   Using `nodemon`:

   ```bash
   npm run start
   ```

   Alternatively, you can configure the `start` script in `package.json` to not use `nodemon` by replacing `"start": "nodemon src/index.js"` with `"start": "node src/index.js"` and then run:

   ```bash
   npm run start
   ```

2. **Start the Frontend**:

   ```bash
   npm run dev
   ```

   Or if you're using yarn:

   ```bash
   yarn dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to start playing!

## Usage

- **Create a Game**: One player can create a new game, which generates a unique game ID.
- **Join a Game**: The second player can join the game using the game ID.
- **Play Chess**: Enjoy a game of chess with real-time updates and a smooth user experience.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Dhanush B D**: [bddhanush03@gmail.com](mailto:bddhanush03@gmail.com)
- **linkedin**: [dhanushbd03](https://www.linkedin.com/in/dhanushbd03/)

---
