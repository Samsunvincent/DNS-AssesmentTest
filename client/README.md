# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# README

## Menu System Implementation

### Overview
This document outlines the implementation of a menu system where categories and items are managed separately and can be dynamically assigned to create a structured menu.

### Features
1. **Categories and Items Management**
   - Categories (e.g., "Dinner", "Brunch") and Items (e.g., "Biriyani", "Pepsi") are stored in separate schemas.
   - Ensures flexibility in managing menu items independently.

2. **Dropdown Selection**
   - Both categories and items are displayed in dropdown lists for easy selection.
   - Improves usability by allowing quick access to available options.

3. **Menu Creation Route**
   - A dedicated route enables the addition of a menu.
   - Users can select a category as the main name and associate multiple selected items with it.
   - This allows structured organization of menus based on predefined or newly added categories.

### User Seeding with MongooseJS-CLI
- The application seeds an admin user using `mongoosejs-cli`.
- The default admin user credentials are:
  - **Email**: `admin@gmail.com`
  - **Password**: `Admin#123`
- This seeded admin account ensures initial access to manage the menu system and other administrative tasks.

### Usage
- This menu system is designed for applications where structured menu management is required, such as restaurants or online food ordering platforms.
- It supports dynamic category addition, ensuring adaptability to evolving menu requirements.

For any modifications or enhancements, update this file accordingly.

