# React Blog App
A simple blog application built with React and Redux Toolkit. This project was created as a training project during the "Programátor WWW aplikací" course to practice building SPAs, managing global state and implementing UI with Material UI.

**Live Demo**: [https://aisabadash.github.io/react-blog-app/](https://aisabadash.github.io/react-blog-app/)

## Features
- View a list of posts
- View comments for each post
- Add, edit and delete posts
- Search posts by title
- Light and dark theme toggle
- Responsive design (Material UI)
 
## Tech Stack  
- React
- Redux Toolkit
- React Router
- Material UI (v7.1.0)
- JavaScript (ES6+)
- Free fake API [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

## Installation

```bash
git clone https://github.com/aisabadash/react-blog-app.git
cd react-blog-app
npm install
```
## Run (local environment)

```bash
npm run dev
```
The application will be available at: http://localhost:5173/  
⚠️ Make sure you have Node.js version ≥ 18.x installed.


## Folder Structure
<pre>
src/
   assets/                    # Static files
   components/                # UI components
   config/                    # Config files
      menu.jsx                # Application menu definitions
      post-create-steps.jsx   # Step definitions for the post creation wizard
   hooks/                     # Custom React hooks
   pages/                     # Route-level page components
   store/                     # Redux store configuration
      store.jsx
      features/               # Redux slices
   App.jsx
   index.css
   main.jsx                   # App entry point </pre>

## TODO
- Migrate async logic to RTK Query;
- Add unit test coverage;
- Add user authentication;
- Add i18n language support

Feel free to explore and try it out!