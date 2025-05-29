# React Blog Application
Simple SPA to create and browse posts, built with React, Redux Toolkit, React Router, and Material UI.

## Installation

```bash
git clone https://github.com/your-username/react-blog-app.git
cd react-blog-app
npm install
```
## Run (local environment)

```bash
npm run dev
```
The application will be available at: http://localhost:5173
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