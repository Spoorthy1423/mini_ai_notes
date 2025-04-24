# AI Notes Taking App

## Description
AI Notes Taking App is a modern, AI-powered platform that allows users to create notebooks, take notes, and get AI-generated suggestions to enhance their note-taking experience. Users can sign up using their Gmail or GitHub accounts and start creating and managing their notes seamlessly. The app also features an AI-powered shortcut (`Shift + A`) to auto-suggest content for your notes.

## Features
- **User Authentication**: Sign up or log in using Gmail or GitHub via Clerk.
- **Notebook Management**: Create, edit, and manage multiple notebooks.
- **AI-Powered Suggestions**: Use the `Shift + A` shortcut to get AI-generated suggestions for your notes.
- **Responsive Design**: Built with TailwindCSS for a seamless experience across devices.

## Technologies Used
- **Frontend**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via NeonDB)
- **AI Integration**: [OpenAI API](https://openai.com/), [Hugging Face API](https://huggingface.co/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest)
- **Rich Text Editor**: [Tiptap](https://tiptap.dev/)

## Installation and Setup
Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Spoorthy1423/mini_ai_notes
   cd AI_NOTES_MAKING
   npm install
   npm run dev
   ```
2. **Set up environment variables**:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
DATABASE_URL=your-database-url
OPENAI_API_KEY=your-openai-api-key
DEEPSEEK_API_KEY=your-deepseek-api-key
HUGGINGFACE_API_KEY=your-huggingface-api-key
FIREBASE_API_KEY = your-firebase-api-key

Usage
Sign up or log in using Gmail or GitHub.
Create a new notebook and start taking notes.
Use the Shift + A shortcut to get AI-generated suggestions for your notes.
