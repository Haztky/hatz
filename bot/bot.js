const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const { OpenAI } = require('openai');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

client.once('ready', () => {
    console.log('Hatz is ready!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'h!q') {
        const quote = await getRandomQuote();
        message.channel.send(quote);
    }

    if (message.content.toLowerCase() === 'h!f') {
        const fact = await getRandomFact();
        message.channel.send(fact);
    }

    if (message.content.toLowerCase() === 'h!g') {
        const news = await getLatestNews();
        message.channel.send(news);
    }

    if (message.content.toLowerCase().startsWith('h!ai')) {
        const prompt = message.content.slice(5).trim();
        if (prompt) {
            const aiResponse = await getAIResponse(prompt);
            message.channel.send(aiResponse);
        } else {
            message.channel.send('Please provide a prompt after the commmand.');
        }
    }
});

async function getAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
        });
        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Sorry, not right now. Try again later.';
    }
}

async function getRandomQuote() {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
            headers: { 'X-Api-Key': process.env.API_NINJAS_KEY },
        });
        return `"${response.data[0].quote}" - ${response.data[0].author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return "Sorry, I couldn't fetch a quote right now.";
    }
}

async function getRandomFact() {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/facts', {
            headers: { 'X-Api-Key': process.env.API_NINJAS_KEY },
        });
        return response.data[0].fact;
    } catch (error) {
        console.error('Error fetching fun fact:', error);
        return "Sorry, I couldn't fetch a fun fact right now.";
    }
}

async function getLatestNews() {
    const newsAPI = process.env.NEWS_API_KEY;
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPI}`);
        const articles = response.data.articles;
        const randomArticle = articles[Math.floor(Math.random() * articles.length)];
        const newsMessage = `**${randomArticle.title}**\n${randomArticle.description}\nRead more: ${randomArticle.url}`;
        return newsMessage;
    } catch (error) {
        console.error('Error fetching news:', error);
        return "Sorry, I couldn't fetch the news right now.";
    }
}

client.login(process.env.DISCORD_BOT_TOKEN);