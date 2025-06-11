# Directory App

A simple React-based Directory Application for adding, storing, and managing user information like name, date of birth, Aadhar number, and mobile number. The data is stored locally using the browser's `localStorage`.

## 🚀 Features

- Add new users with details: Name, DOB, Aadhar, Mobile
- Automatically calculates and displays the user's age
- Data is saved in `localStorage` for persistence
- View saved users in a table format
- Delete user entries
- Displays a fallback UI when no data is found

## 🧠 Technologies Used

- React (Functional Components with Hooks)
- Tailwind CSS for styling
- Lucide-react for icons
- localStorage for data persistence

## 📁 File Structure

```
src/
├── components/
    │── AddPerson.jsx
    │── Footer.jsx
    ├── Header.jsx
    ├── NoUserData.jsx
    └── RetrieveInfo.jsx
├── utils/
│   └── calculateAge.js    
└── App.jsx                

```

## 🔧 Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/PremGChavan/REACT-DIRECTORY-APP.git
cd directory-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the app locally:
```bash
npm run dev
```

## 📝 Notes

- Ensure Aadhar is 12 digits and Mobile number is 10 digits for validation.
- This project uses React's state and `useEffect` hook to load and manage data.

## ❓ Future Improvements

- Backend integration with MongoDB or Firebase
- Search/filter functionality for saved users
- Responsive UI improvements

---

## Author

Made by Prem Chavan


