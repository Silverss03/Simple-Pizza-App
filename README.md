# 🍕 Pizza Online Shop - React Native App

## 📌 Introduction
This is a mobile application for an online pizza shop built using React Native. The app allows users to browse a menu, view details of different pizzas, and place orders. The backend is developed using ExpressJS and MySQL to handle user authentication, product management, and order processing.

## 🛠 Technologies Used
### Frontend
- React Native
- React Navigation
- Axios
- Context API (for state management)

### Backend
- Node.js with ExpressJS
- MySQL (Database)
- Cors (Cross-Origin Resource Sharing)
- Bcrypt (Password hashing)
- JWT (JSON Web Token for authentication)

## 📂 Project Structure
```
PizzaShopApp/
│── Front_end/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── navigation/
│   │   ├── assets/
│   │   ├── App.js
│   │   ├── index.js
│── Back_end/
│   ├── controller/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│── package.json
│── README.md
```

## 🚀 Installation & Setup

### Prerequisites
Make sure you have the following installed:
- Node.js
- MySQL
- Expo CLI (for React Native development)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd Back_end
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure database connection in `database.js`.
4. Run the server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd Front_end
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Scan the QR code with Expo Go (Android) or use an emulator (iOS).

## 📌 Features
- 📋 View pizza menu with categories
- 🛒 Add items to cart
- 🔐 User authentication (login/register)
- 📦 Place an order
- 💳 Payment integration (upcoming feature)


## 📌 Contribution
Feel free to contribute! Fork the repo, create a feature branch, and submit a pull request.

---
### 📧 Contact
For inquiries, reach out to nguyenhuumanhhp2003@gmail.com.



