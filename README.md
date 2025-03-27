# Mindful Connect - Frontend

Project Live link: [Link](https://mc-frontend-8848.onrender.com)

## Overview

Mindful Connect is a comprehensive mental wellness platform that combines AI-driven emotional support with personalized therapist matching services. The application helps users find therapists based on their unique needs and preferences while providing 24/7 AI support through Pandora, an AI mental health companion.
![WhatsApp Image 2025-03-27 at 17 39 42_801fc585](https://github.com/user-attachments/assets/283a4311-17e4-4dd7-8f44-5770cb70c408)

## Features

- **AI Chatbot (Pandora)**: 24/7 emotional support and mental health resources

  ![WhatsApp Image 2025-03-27 at 17 46 14_4bb8a8fc](https://github.com/user-attachments/assets/994a817e-0c0f-40a2-a3df-973e4d933fd6)

- **Therapist Matching System**
  
![WhatsApp Image 2025-03-27 at 17 38 52_91e6652b](https://github.com/user-attachments/assets/9b676179-4b2c-45f8-9540-758899be3be1)

-  Find therapists based on specific criteria:
  - Concerns (anxiety, depression, etc.)
  - Therapist gender preference
  - Session mode (in-person, online, hybrid)
  - Experience level
  - Specializations
  - Budget considerations
  - Cultural/religious preferences
- **Interactive UI**: Modern, responsive interface with smooth animations
- **Multi-step Matching Process**: Guided workflow for precise therapist matching

  ![WhatsApp Image 2025-03-27 at 17 43 42_16434e3a](https://github.com/user-attachments/assets/c3f90584-ed1b-48a4-b08c-1e6c913eeef3)


## Technologies Used

- **React**: v19.0.0
- **Material UI**: v6.4.7 for component styling
- **Framer Motion**: v12.5.0 for animations
- **React Router**: v7.3.0 for navigation
- **Axios**: v1.8.3 for API requests

## Project Structure

```
src/
├── assets/            # Images and static assets
├── components/        # React components
│   ├── ChatModal.js   # AI Chatbot modal component
│   ├── features.js    # Service features section
│   ├── footer.js      # Page footer
│   ├── Header.js      # Navigation header
│   ├── Hero.js        # Landing page hero section
│   ├── howitworks.js  # Process explanation section
│   ├── stats.js       # Statistics display
│   ├── testimonials.js # User testimonials
│   ├── TherapistSection.js # AI therapist feature showcase
│   └── steps/         # Therapist matching questionnaire steps
├── pages/             # Page components
├── styles/            # CSS files
├── contexts/          # React contexts (e.g., ThemeContext)
└── utils/             # Utility functions
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/mindful-connect-frontend.git
   cd mindful-connect-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. The application will be available at `http://localhost:3000`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Key Components

### Chatbot Integration

The platform features an AI mental health companion named Pandora, accessible through a chat interface:

```jsx
<ChatModal isOpen={isChatOpen} onClose={closeChat} />
```

### Therapist Matching System

The application offers a multi-step process to match users with therapists:

```jsx
// TherapistMatching.js
const steps = [
  "Your Concern",
  "Therapist Gender",
  "Age Range",
  "Marital Status",
  "Session Mode",
  "Experience Level",
  "Specialization",
  "Insurance",
  "Budget",
  "Cultural Needs",
];
```

## Deployment

To build the application for production:

```
npm run build
```

The build files will be created in the `build/` directory, ready to be deployed to a static hosting service like Vercel, Netlify, or AWS S3.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

[MIT License](LICENSE)

## Contact

For questions or support, please contact [My email](monicahwamuhu2@gmail.com)
