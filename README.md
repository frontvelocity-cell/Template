# DXB VIP Lounge Service

A React web application for Dubai International Airport VIP lounge services.

## Features

- Home page with service overview
- Packages page with VIP service options
- Partners page showcasing trusted partners
- FAQ page with expandable questions and answers
- Contact page with contact form
- Booking page for VIP service reservations
- Responsive design with mobile support
- 404 error page for invalid routes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

### Project Structure

```
src/
  components/
    Header.js - Navigation header
    Footer.js - Site footer
    Home.js - Homepage component
    Packages.js - VIP packages page
    Partners.js - Partners showcase
    FAQ.js - FAQ page with expandable items
    Contact.js - Contact form
    BookNow.js - Booking form
    NotFound.js - 404 error page
  __tests__/
    App.test.js - Main app tests
    Header.test.js - Header component tests
    FAQ.test.js - FAQ component tests
    NotFound.test.js - 404 page tests
  App.js - Main application component
  index.js - Application entry point
```

## Technologies Used

- React 18
- React Router DOM 6
- CSS3 with custom styling
- Jest for testing
- React Testing Library

## License

This project is licensed under the MIT License.