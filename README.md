# 🔑 Animated Sliding Login & Register Project

Welcome to **Login-Register-Project**! This repository showcases a premium, fluid, and interactive user experience (UI/UX) featuring a classic horizontal split sliding animation. The project is built using a modern **React** frontend and includes a structured **Java (Spring Boot)** backend architecture.

---

## 🚀 Current Project Status

> 💡 **Portfolio Note:** This repository is currently optimized as a full **Frontend UI/UX showcase**. It highlights smooth native CSS transitions, reactive form state management in React, and unified modal structures for social authentication. The Backend folder is included as a pre-configured architecture layer, ready for future end-to-end API integration.

---

## ✨ Core Features

*   **🔄 Smooth Parallax Sliding Animation:** Alternating between *Login* and *Register* smoothly slides the form containers and the visual panel in opposite directions using hardware-accelerated CSS (`transform: translateX()`).
*   **🌐 Clean Social Auth Layout:** Unified, accessible button structures styled for **Google, GitHub, and LinkedIn** authentication flows.
*   **📩 Interactive Password Recovery Simulation:** The *Forgot Password* layout simulates a network request loading state before displaying a green success notification alongside an interactive, clickable mock email link that securely bridges the user to the *Reset Password* view.
*   **🖥️ Aesthetic Retro UI:** A beautiful, responsive layout following the *Poppins* typography guidelines, subtle text shadows, and a retro pixel-art terminal typing background.
*   **🛡️ Production Ready & Secure:** Hardcoded credentials have been fully decoupled and cleaned up, making the frontend codebase 100% safe to deploy publicly.

---

## 🛠️ Tech Stack

### **Frontend**
*   **React (v18+)** - Component-driven architecture and state hooks.
*   **React Router Dom** - Dynamic frontend client-side routing.
*   **Axios** - HTTP client pre-configured for upcoming backend service calls.
*   **CSS3** - Custom keyframes, flexbox, and smooth transition easing functions.

### **Backend (Base Architecture)**
*   **Java & Spring Boot** - REST API framework infrastructure.
*   **Spring Security** - Security and authentication configuration filters.
*   **Hibernate / JPA** - Object-Relational Mapping (ORM) setup.
*   **MySQL / H2** - Pre-configured relational database properties.

---

## 📦 Repository Structure

```text
Login-Register-Project/
├── Backend/                 # Spring Boot REST API (Java, Maven source files)
└── frontend/                # React Single Page Application (UI Layer)
    ├── public/
    └── src/
        ├── components/      # Form components (LoginForm.js, RegisterForm.js)
        ├── pages/           # View layouts (HomePage.js, ForgotPasswordPage.js, etc.)
        ├── App.css          # Global styling and custom sliding animations
        └── App.js           # Central React Router distribution layout
```

---

## 🚀 Local Installation & Setup

To clone this repository and spin up the frontend interface on your local machine, run the following commands:

1.  **Clone the repository and enter the frontend folder:**
    ```bash
    git clone https://github.com
    cd Login-Register-Project/frontend
    ```

2.  **Install the required node modules:**
    ```bash
    npm install
    ```

3.  **Start the local development server:**
    ```bash
    npm start
    ```
    *The web application will automatically fire up in your default browser at `http://localhost:3000`.*

---

## 📷 Preview & Visuals

Here is a look at the final animated design of the application:

| Login View | Register View |

<img width="400" alt="Login View" src="https://github.com/user-attachments/assets/78f4fd1b-a81f-4678-81d1-8a05731b1c96" /> 
<img width="400" alt="Register View" src="https://github.com/user-attachments/assets/2c97a358-449e-4ab8-82ce-a5184d8ef5a5" />

*Note: You can also watch the sliding transition smoothly by running the project locally.*

| Forgot Password | Reset Password |

<img width="400" alt="Forgot View" src="https://github.com/user-attachments/assets/b9297625-fec6-4e51-a609-be0417b57637" /> 
<img width="400" height="176.73" alt="Reset View" src="https://github.com/user-attachments/assets/3c6a4ebf-f34b-4531-a952-d33e0651b12b" />

<img width="800" height="450" alt="Image" src="https://github.com/user-attachments/assets/bc452234-1847-4638-b006-61fe9567a3ee" />
*P.S.: It's actually really smooth. The video cuts are just to avoid showing any personal information.*

---

## 🤝 Contributing & Contact

Crafted with ❤️ by **[Claudia Calero](https://github.com)**. 
Feel free to explore my GitHub profile to see more of my coding journey, open an issue, or connect!
[LinkedIn](https://www.linkedin.com/in/claudia-calero/)


## 📄 License

This project is for educational and development purposes.

Bye!
