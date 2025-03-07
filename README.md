
## Introduction 👋

Next Portfolio is built using Next.js and Tailwind CSS for a modern design and rapid development. TypeScript is utilized for code clarity and safety. Additionally, Firebase is being integrated for backend services such as realtime-database. The result is a dynamic and functional portfolio website that showcases the developer's skills and experience.

## Tech Stack 🛠️

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com)




## Development 💻

Here are the steps to run the portfolio locally.


1. Clone your forked copy of the repo

   ```bash
   git clone https://github.com/Kish202/Tania-portfolio.git
   ```

2. Install dependencies

   ```bash
   npm i
   ```

3. Create a Firebase project and select the web app

4. Create an `.env.local` file in the root directory, and add the following variables with your firebase config:
   ```
   NEXT_PUBLIC_FIREBASE_DATABASE_URL= your firebase url
   SENDINBLUE_SMTP_USER= xxxxxxxx
   SENDINBLUE_SMTP_PASS=xxxxxxx
   SENDINBLUE_SENDER_EMAIL=Email from
   MAIL_TO=email to
   ```
   <!-- write text to tell user to get sendgrid keys from dashboard and add here -->

> **Note**: `SENDINBLUE_SMTP_PASS` - Create an API key from "Settings"

1. Update the sample [data.json] provided, with your data or directly import the same and edit using firebase later. For storing images you can use [Cloudinary](https://cloudinary.com) or [Firebase Storage]

2. Import json data

   - Go to [Firebase Console](https://console.firebase.google.com) and select your project
   - Go to "Database" -> "Realtime Database" -> "Import JSON" and import the [data.json] file

3. Run the project

   ```bash
   npm run dev
   ```

## Deployment 🚀

1. Create a Vercel account and select "Import Project"

2. Select the forked repository and deploy

3. Add the following environment variables in the Vercel dashboard:
   ```
   NEXT_PUBLIC_FIREBASE_DATABASE_URL= your firebase url
   SENDINBLUE_SMTP_USER= xxxxxxxx
   SENDINBLUE_SMTP_PASS=xxxxxxx
   SENDINBLUE_SENDER_EMAIL=Email from
   MAIL_TO=email to
   ```
4. Hurray! You successfully deployed the portfolio🥳

## License 📄

This project is licensed under MIT License


