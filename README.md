## Getting Started Locally
Clone the project and inside the folder, run the development server:
```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# CarePulse

CarePulse is a patient management platform where a user can register themselves as a patient and apply for an appointment within minutes!

CarePulse is built on:
> NextJs
> TypeScript
> React
> Node
> Tailwind CSS

and uses:
> Shadcn/ui (UI Components)
> Appwrite (For database management and user Auth)
> Twilio (For SMS alerts)
> Sentry (To keep checks and maintain robustness)

## Features

- User can regsiter as a patient, filling out a comprehensive form to gather all information.
- Users can select doctors and book multiple appointments, giving their reasons and date options for an appointment.
- As special Admin dashboard for the hospital staff is accessible using a simple encrypted Passkey, making it secure.
- Hospital admin staff can confirm and schedule or cancel the pending appointments, by various patients, in the dashboard.
- Users are notified regarding the final confirmation via SMS so that they are updated as soon as possible.

### [Demo](https://nextjs-health-app-h5ax.vercel.app/)
- Admin dashboard can be accessed from the homepage (below the form) with the passKey - `123456`