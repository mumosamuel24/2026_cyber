Cyber Digital Services Platform

A full-stack digital service platform for Kenya offering IT support, graphic design, web development, government services, and cyber café services.  

Clients can submit service requests, upload files, and receive confirmations. The platform sends notifications to the service provider via email and SMS. An admin dashboard allows managing requests, updating status/payment, and viewing attachments.

---

## Features

### Client Side
- Submit service requests with name, email, phone, service type, description, and optional file uploads.
- Receive confirmation upon request submission.

### Admin Side
- View all service requests in a dashboard table.
- Filter by service type and search by name, email, or phone.
- Update request status (`PENDING`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`).
- Update payment status (`UNPAID`, `PAID`).
- View uploaded attachments in a modal.

### Notifications
- Email notification sent to the service provider for every new request.
- SMS notification sent via Africa’s Talking API for every new request.

---

## Folder Structure


cyber/
├─ frontend/ # Next.js frontend
│ ├─ app/
│ │ ├─ admin/ # Admin dashboard pages and components
│ │ └─ request/ # User request form
│ ├─ components/
│ ├─ public/
│ └─ globals.css
├─ backend/ # Node.js/Express backend
│ ├─ src/
│ │ ├─ controllers/ # Service request controller
│ │ ├─ models/ # MongoDB models
│ │ ├─ routes/ # API routes
│ │ └─ server.ts
├─ uploads/ # Multer file storage for attachments
├─ .gitignore
├─ README.md
└─ package.json # Optional root scripts


---

## Prerequisites

- Node.js >= 18
- npm
- MongoDB (local or Atlas)
- Africa’s Talking account (for SMS notifications)
- Gmail account (or any SMTP) for email notifications

---

## Environment Variables

Create `.env` in `backend/`:


PORT=5000
MONGO_URI=your_mongodb_uri

EMAIL_USER=youremail@gmail.com

EMAIL_PASS=your_email_app_password
NOTIFY_EMAIL=youremail@gmail.com

AT_USERNAME=your_africas_talking_username
AT_API_KEY=your_africas_talking_api_key
NOTIFY_PHONE=+2547XXXXXXXX


Create `.env.local` in `frontend/`:


NEXT_PUBLIC_API_URL=http://localhost:5000/api/services


---

## Installation

### Backend

```bash
cd backend
npm install
Frontend
cd frontend
npm install
Running the Project
Backend
cd backend
npm run dev

Starts Express server on http://localhost:5000

Frontend
cd frontend
npm run dev

Starts Next.js app on http://localhost:3000

Usage

Open http://localhost:3000/request to submit a new service request.

Check email and SMS notifications for each new request.

(Optional) Open http://localhost:3000/admin to manage requests once admin dashboard is fully integrated.

Technologies Used

Frontend: Next.js 13, React, TypeScript, Tailwind CSS

Backend: Node.js, Express, TypeScript, MongoDB, Mongoose

Notifications: Nodemailer (Email), Africa’s Talking (SMS)

File Uploads: Multer

Version Control: Git

Future Enhancements

Authentication and authorization for admin dashboard

Payment integration (M-Pesa, Stripe)

Real-time notifications using WebSockets

Export requests to CSV/Excel

Pagination and analytics for admin dashboard

License

MIT License


---

If you want, I can also give you a **single Bash command** that will **create this README.md and fill it with this content automatically**, so you don’t have to manually copy-paste.  

Do you want me to do that?
DEVELOPER MODE


# cyber_2026
