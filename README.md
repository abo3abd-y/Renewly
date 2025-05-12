# 🚧 Renewly - Budget Tracking and Subscription Management App 🚧

**⚠️ Disclaimer:** This project is currently under active development. Features and functionality may change as the project progresses.

## 📚 Project Overview

Renewly is a modern, full-stack web application designed to help users efficiently manage their subscriptions and track their spending. With a clean, responsive design and powerful financial integrations, Renewly aims to simplify personal finance by providing real-time insights into subscription spending, budgeting, and renewal dates.

## ✨ Features

- **Secure Authentication:** Create and manage user accounts with secure authentication.
- **Subscription Tracking:** Monitor active subscriptions, including costs, billing cycles, and renewal dates.
- **Renewal Reminders:** Receive email or SMS notifications before subscriptions renew, helping users avoid unexpected charges.
- **Spending Insights:** Visualize spending trends and monthly expenses to optimize budgeting.
- **Bank Transaction Integration:** Securely connect to bank accounts to track all recurring payments and subscriptions (Plaid API integration).
- **Responsive Design:** Optimized for both mobile and desktop devices.

## 🛠️ Technologies and Frameworks

- **Frontend:**
  - React.js (JavaScript library for building user interfaces)
  - HTML5 and CSS3 (responsive design)
  - Axios (for API requests)

- **Backend:**
  - Node.js (JavaScript runtime for server-side programming)
  - Express.js (backend framework for building APIs)
  - Plaid API (secure bank transaction data integration)
  - MongoDB (database for storing user and subscription data)

- **Authentication:**
  - JSON Web Tokens (JWT) for secure authentication
  - bcrypt.js for password hashing

- **Deployment and Hosting:**
  - Vercel, Netlify, or AWS (planned for frontend hosting)
  - Heroku or DigitalOcean (planned for backend server hosting)

## 🚀 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB database instance (local or cloud)
- Plaid API credentials

### Installation

```bash
# Clone the repository
$ git clone https://github.com/abo3abd-y/renewly.git

# Navigate to the project directory
$ cd renewly

# Install dependencies for the backend
$ cd backend
$ npm install

# Install dependencies for the frontend
$ cd ../frontend
$ npm install
```

### Environment Variables
Create a `.env` file in the `backend/` directory and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox
```

### Run the Application

Start the backend server:
```bash
cd backend
npm run dev
```

Start the frontend server:
```bash
cd ../frontend
npm start
```

### Usage
- Create an account or log in.
- Add your bank account for transaction tracking.
- Set up subscription reminders.
- View monthly spending insights and manage subscriptions.

## 📌 Roadmap

- [x] Secure authentication system
- [x] Subscription tracking
- [ ] Plaid API integration for transaction tracking
- [ ] Monthly spending insights and analytics
- [ ] Mobile app support (future)

## 🙌 Contributing

Contributions are welcome! Please feel free to open a pull request or submit issues for any bugs or feature requests.

## 📄 License

This project is licensed under the MIT License.

**⚠️ Disclaimer:** This project is still under active development. Features and functionality may change as the project progresses.
