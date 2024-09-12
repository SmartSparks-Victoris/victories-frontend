# Smart Sparks

## Project Overview

The project aims to develop a comprehensive customer service platform that integrates with popular messaging services such as WhatsApp and Messenger. The primary objective is to streamline the process of managing and classifying user inquiries and support tickets, enabling businesses to deliver efficient and responsive customer service. This platform will serve as a centralized hub where all customer interactions, regardless of the communication channel, are aggregated, managed, and resolved.

## Technologies Used

- **Next.js 14**: For server-side rendering and static site generation.
- **React**: For building the user interface components.
- **TypeScript**: For type safety and better development experience.
- **Socket.IO**: For real-time communication.
- **Tailwind CSS**: For styling the application.

## Application Structure

The application is organized into three different views:

1. **Guest View**:

   - **Purpose**: Allows guests to explore information about the service and learn what will be offered if they subscribe.
   - **Features**: Provides details on services, benefits, and subscription options.

2. **Owner View**:

   - **Purpose**: Designed for shop owners or businesses who need to manage and categorize different types of feedback.
   - **Features**: Includes tools for managing feedback, viewing statistics, and interacting with customer inquiries.

3. **Admin View**:

   - **Purpose**: Admins assist owners by managing their tasks with some limitations compared to owners.
   - **Features**: Provides access to manage user accounts, view reports, and perform administrative tasks.

## Getting Started

To run the application locally, follow these steps:

1. **Set up the Testing Server**:

   - Open a new terminal and navigate to the main project folder
   - Navigate to the `server` directory:

     ```bash
     cd server
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the server using `nodemon`:

     ```bash
     nodemon server.js
     ```

2. **Run the Client**:

   - Open a new terminal and navigate to the main project folder
   - Install client-side dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Testing the Application**:

   - Access the client application at [http://localhost:3000](http://localhost:3000).
   - Use the following credentials to test different functionalities:
     - **Admin**: Username: `john`, Password: `any password`
     - **Owner**: Username: `jane`, Password: `any password`

## Current State

The application is currently in its initial implementation phase. The structure represents the foundational codebase, but the UI design and final features are still in development.

## Summary

Feel free to explore and test the application by navigating to the client URL. This README provides an overview of the application’s setup and the roles available. For more details or specific instructions, refer to the codebase or contact the development team.

