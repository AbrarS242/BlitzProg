# BlitzProg

BlitzProg is a Discord bot designed for blitz programming games. It facilitates coding challenges and competitions within Discord servers, providing an engaging way for users to improve their programming skills.

## Features

- **Real-time Coding Challenges:** Participate in timed coding challenges directly within Discord.
- **Score Tracking:** Automatically tracks and updates user scores.
- **Customizable:** Easily customize challenge settings and parameters.

## Installation

To run BlitzProg on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbrarS242/BlitzProg.git
   cd BlitzProg

2. **Install dependences:**
   ```bash
   npm install

3. **Create a .env file** in the root directory and add your Discord bot token:**
   ```bash
   DISCORD_TOKEN=your_discord_bot_token
   
4. **Run the bot:**
   ```bash
   node main.js
   ```

## Usage

1. **Invite the bot:** to your Discord server using the invite link generated in the Discord Developer Portal.
2. **Start a challenge**: Use the commands `!init`  and `!start` to initiate a new coding challenge.
3. **Submit solutions**: Users can submit their solutions using the command `!submit`.
