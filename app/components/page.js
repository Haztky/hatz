"use client";

import React from "react";

const botInviteLink =
  "https://discord.com/oauth2/authorize?client_id=1315977661583069225&permissions=8&integration_type=0&scope=applications.commands+bot";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black py-8">
      <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-800 bg-opacity-80 p-8 rounded-lg shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-100 mb-6 leading-tight">
            Invite Hatz to Your Server!
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Click the button on the right to add the bot to your server and start using
            commands.<br />(More to come soon!)
          </p>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4">
            Commands:
          </h2>
          <div className="text-lg text-gray-300">
            <p className="mb-4">
              <span className="font-bold text-teal-400">H!q:</span> Get a random
              quote of the day.
            </p>
            <p className="mb-4">
              <span className="font-bold text-teal-400">H!f:</span> Receive a
              fun fact to brighten your day.
            </p>
            <p className="mb-4">
              <span className="font-bold text-teal-400">H!g:</span> Stay updated
              with the latest news.
            </p>
          </div>
          <a href={botInviteLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
              Add Bot to Your Server
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
