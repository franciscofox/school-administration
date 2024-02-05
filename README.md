# School Administration Project

## Overview
This is a school-administration project designed to manage rooms, students, and related functionalities. The project is divided into frontend and backend components.

- Frontend: This repository (school-administration-client)
- Backend: [school-administration-server](https://github.com/franciscofox/school-administration-server)

## Features
- **Student Management:**
  - Add, delete, and view detailed information about students.
  - Manage siblings and view students in specific rooms.

- **Room Management:**
  - Add, delete, and view detailed information about rooms.
  - Search for available rooms.

- **Authentication:**
  - User authentication using the AuthContext.

## Tech Stack

### Frontend
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): React framework for server-rendered web applications.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [PostCSS](https://postcss.org/): A tool for transforming CSS with JavaScript plugins.

### State Management
- [React Context API](https://reactjs.org/docs/context.html): For managing application state.

### Styling
- [Styled Components](https://styled-components.com/): CSS-in-JS library for styling React components.

### Backend
- [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.

### Database (Not explicitly mentioned in the project tree)
- [PostgreSQL](https://www.mongodb.com/): Database for storing application data.

## Project Structure
The project structure follows a standard Next.js setup with components, context, pages, and styles directories. Here is a brief overview:

- **components:** Reusable React components organized by feature (students, rooms).
- **context:** Contains the AuthContext for managing user authentication.
- **helpers:** Includes signup helper functions.
- **pages:** Top-level components corresponding to different pages/routes in the application.
- **styles:** Stylesheets for components and global styles.
- **public:** Public assets like images and icons.

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the backend (if applicable) and configure database connections.
4. Run the development server with `npm run dev`.

## Additional Notes
- This project uses TypeScript (tsconfig.json).
- Ensure to configure environment variables if needed.

Feel free to contribute or open issues for any improvements or bug fixes.
