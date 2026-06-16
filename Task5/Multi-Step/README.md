# Onboarding Flow - Setup Guide

## Install dependencies
npm install react-hook-form @reduxjs/toolkit react-redux

## Run the app
npm run dev

## Folder structure to follow
src/
├── app/store.js
├── features/onboarding/onboardingSlice.js
├── components/
│   ├── StepIndicator.jsx
│   ├── NavigationButtons.jsx
│   ├── FormField.jsx          ← reusable input component
│   └── forms/
│       ├── PersonalInfoForm.jsx
│       ├── ContactInfoForm.jsx
│       ├── ProfessionalInfoForm.jsx
│       ├── PreferencesForm.jsx
│       └── AccountSetupForm.jsx
├── pages/OnboardingPage.jsx
├── App.jsx
├── App.css
└── main.jsx