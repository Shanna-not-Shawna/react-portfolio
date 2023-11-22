# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Header - Dev's name and navigation 
    About Me (Home)
        Photo, bio
    Portfolio
        images of 6 apps with title, deployed link and repo
    Contact
        contact form with name, email, message
    Resume
        downloadable resume
Content Section
Footer
    links to GitHub and LinkedIn and another profile

Navigation title of current page is highlighted
When cursor is moved out of one of the form fields, notify that field is required
notify of invalid email address

Application has a single Header component that appears on multiple pages, with a Navigation component within it that uses react-router-dom to render About Me, Portfolio, Contact, and Resume sections.

Application has a single Project component that’s used multiple times in the Portfolio section.

Application has a single Footer component that appears on multiple pages.

Application must be deployed to Netlify.