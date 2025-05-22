# WhatsTask Telegram Mini App

A task management mini app for Telegram that allows teams to manage tasks and track progress.

## Environment Variables

This project requires the following environment variables:

- `BOT_TOKEN`: Your Telegram bot token
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for admin operations)
- `NEXT_PUBLIC_APP_URL`: The URL of your deployed app
- `WEBHOOK_URL`: The URL for your Telegram webhook (usually `${NEXT_PUBLIC_APP_URL}/api/telegram-webhook`)

## Setup Instructions

1. **Deploy to Vercel**

   Deploy this project to Vercel and set up the environment variables.

2. **Set up the Webhook**

   Run the webhook setup script:

   \`\`\`bash
   npx tsx scripts/set-webhook.ts
   \`\`\`

3. **Set up the Menu Button**

   Run the menu button setup script:

   \`\`\`bash
   npx tsx scripts/set-menu-button.ts
   \`\`\`

4. **Test the Integration**

   Open your bot in Telegram and click the "Open WhatsTask" button in the menu.

## Development

To run the project locally:

\`\`\`bash
npm install
npm run dev
\`\`\`

## Features

- Task creation and assignment
- Task status updates
- Team management
- Real-time notifications
- Telegram integration

## Security

This project implements security best practices:

- Telegram data validation
- Secure environment variables
- HTTPS-only communication
- Proper authentication and authorization
