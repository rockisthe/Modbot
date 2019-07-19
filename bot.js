import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_ready():
    await client.change_presence(game=Game(name='playing roblox'))
    print('Ready, Freddy') 


@client.event
async def on_message(message):
    if message.content == '!shit':
        await client.send_message(message.channel,'get a fucking life')
    if ('gay') in message.content:
       await client.delete_message(message)
client.run('NjAxOTA2NDI0Mjc2MTg5MjA1.XTJNvw.B6KRdhdjUDu7o3IhWbDs1wawN4M')
