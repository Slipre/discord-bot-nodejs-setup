# discord-bot-nodejs-setup

***Starter kit*** for creating Discord bots using Node.js.

This repository was created for people who are new to bot programming, but also for more experienced developers who want to jumpstart a new project. It contains all the necessary elements to get you started right away.

## Requirements

Before you start, make sure you have installed:

- **Node.js** (version 18.x or newer)
You can download Node.js from the official website *[Nodejs.org](https://nodejs.org/)*

- **Discord Developer Account**
To get a bot token, you need to create an application in *[Discord Developer Portal](https://discord.com/developers/applications)*

## Installation

**Clone the repository or download the code:**

```bash
git clone https://github.com/yourusername/discord-bot-nodejs-setup.git
cd discord-bot-nodejs-setup
```
Alternatively, you can download the repository as a ZIP file and unzip it on your computer.

## Install dependencies:

Using **NPM**, run the command:

```bash
npm install
```
This command will install all the necessary packages listed in the *package.json* file.

## Configure the *.env* file:

There is a *.env* file in the repository.

Fill it with your Discord bot token, which you can get from the *Discord Developer Portal*, then add it to the *.gitignore* file.  
You will not add it to the repository so no one will know your tokens

## Run the bot:

Once you have installed the dependencies and configured the token, you can run the bot:

```bash
node .
```
The bot should now be up and running and ready to interact.

## Usage
Once the bot is up and running, add it to your Discord server using the authorization link from the *Discord Developer Portal*, making sure it has the right permissions.  
By default, the bot responds to a simple command like ***/ping***.  
You can extend this bot by adding more features according to your needs.

## Useful links:
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Discord.js Documentation](https://discord.js.org/docs/packages/discord.js/14.16.2)
- [Discord Developer Portal](https://discord.com/developers/applications)

## License:

The project is licensed under the ***MIT license***.