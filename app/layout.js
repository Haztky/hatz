import "./globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your Discord Bot</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Invite our Discord bot to your server and enjoy features like daily quotes, fun facts, and game news!"
        />
      </head>
      <body className="bg-gradient-to-r from-black via-blue-900 to-indigo-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
