![Screenshot 2024-10-03 at 17 46 26](https://github.com/user-attachments/assets/cbf4b819-b692-4a40-b422-12638e169e9d) ![Screenshot 2024-10-03 at 18 46 10](https://github.com/user-attachments/assets/751efebd-2026-43bc-a18a-5aaab140228e) ![Screenshot 2024-10-03 at 18 46 23](https://github.com/user-attachments/assets/5498ff6f-91cd-403d-9806-3c4734106bed) ![Screenshot 2024-10-03 at 18 46 38](https://github.com/user-attachments/assets/b86553f6-a70b-446b-a40f-c1c17607d9de) ![Screenshot 2024-10-03 at 18 48 59](https://github.com/user-attachments/assets/46be502e-8f95-40eb-9009-83f3c1a09bcb) ![Screenshot 2024-10-03 at 18 49 57](https://github.com/user-attachments/assets/f07f1475-1038-485d-9e9d-01c5f17451ad) ![Screenshot 2024-10-03 at 18 56 32](https://github.com/user-attachments/assets/47b5d698-56b3-4f73-b8b5-d0c1636f1432) ![Screenshot 2024-10-04 at 03 55 09](https://github.com/user-attachments/assets/205cf346-88cd-42e2-9a4c-476cc09a3b71) ![Screenshot 2024-10-03 at 20 33 18](https://github.com/user-attachments/assets/45dcb2ed-30f0-4871-b6cc-647799541fe9) ![Screenshot 2024-10-03 at 20 33 49](https://github.com/user-attachments/assets/67e31616-959e-4cf3-9f8c-63717ef14b72)

## HealthCare-NextJS-Website

HealthCare is a healthcare patient management application using Next.js, Twilio (for SMS notification), TypeScript, TailwindCSS, Shadcn-UI, Zod (for From Validation), Sentry (to monitor performance and error), CLSX that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, and deployed on Vercel.

**To check the website live, visit:** https://healthcare-arnob.vercel.app/

## Project Features

> **Register as a Patient**: Users can sign up and create a personal profile as a patient.

> **Book a New Appointment with Doctor**: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

> **Manage Appointments on Admin Side**: Administrators can efficiently view and handle all scheduled appointments.

> **Confirm/Schedule Appointment from Admin Side**: Admins can confirm and set appointment times to ensure they are properly scheduled.

> **Cancel Appointment from Admin Side**: Administrators have the ability to cancel any appointment as needed.

> **Send SMS on Appointment Confirmation**: Patients receive SMS notifications to confirm their appointment details.

> **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

> **File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services.

> **Manage and Track Application Performance Using Sentry**: The application uses Sentry to monitor and track its performance and detect any errors.

## To Install Dependences

Before launching this web application, be sure to install all required dependencies, which are listed in the package.json file.

To install all dependences, run this command from your project folder: `npm install`

## To Run Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## To Install NodeJS

Make sure you have NodeJS installed on your machine first, The installation instructions are here: https://nodejs.org/en/

## To Setup .env File For Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_DATABASE_ID=
NEXT_PUBLIC_PATIENT_COLLECTION_ID=
NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=123123
```

> Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

## About Appwrite Database

Create an account, then create a database `patient-db` then create three collection called `patient`, `doctor`, `appointment`

Attributes of `patient` database:

`email` (Requried), `phone` (Required), `irerId` (Required), `name` (Required), `privacyConsent` (Boolean: Requried), `gender` (Enum), `birthDate`, `address`, `occupation`, `emergencyContactName`, `emergencyContactNumber`, `insuranceProvider`, `insurancePolicyNumber`, `allergies`, `currentMedication`, `familyMedicalHistory`, `pastMedicalHistory`, `identificationType`, `identificationNumber`, `identificationDocumentId`, `identificationDocumentUrl`, `primaryPhysician`, `treatmentConsent`, `disclosureConsent`

Attributes of `appointment` database:

First Select as `Many to One Relationship` with `patient` . Then the attributes are: `schedule` (Datetime: Required), `reason` (String: Required), `note`, `primaryPhysician` (String: Required), `status` (Enum: Required), `userId` (String: Required), `cancellationReason`

> For more info about Appwrite: https://appwrite.io/

# To Setup Twilio

You need to create, and an account and get the Account SID, Auth token, Sender number (Generate by Tiwilo) and insert that info into appwrite account inside in your appwrite project under Messaging > Prodivers > Next.js > SMS Notification > then fill those info and save it.

> For Twilio, visit: https://appwrite.io/docs/products/messaging/twilio

> For Sentry, visit: https://sentry.io/welcome/?utm_source=google&utm_medium=cpc&utm_id={20398270056}&utm_campaign=Google_Search_Brand_SentryKW_EMEA-Tier1_Alpha&utm_content=g&utm_term=sentry