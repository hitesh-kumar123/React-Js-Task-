import { createSlice } from "@reduxjs/toolkit";
const loadFromStorage = () => {
  try {
    const data = localStorage.getItem("onboardingData");
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

const saved = loadFromStorage();

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    currentStep: saved.currentStep || 0,
    personalInfo: saved.personalInfo || {},
    contactInfo: saved.contactInfo || {},
    professionalInfo: saved.professionalInfo || {},
    preferences: saved.preferences || {},
    accountSetup: saved.accountSetup || {},
  },

  reducers: {
    // Jump to any step (used by StepIndicator clicks)
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },

    // Save each form's data when submitted
    savePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    saveContactInfo: (state, action) => {
      state.contactInfo = action.payload;
    },
    saveProfessionalInfo: (state, action) => {
      state.professionalInfo = action.payload;
    },
    savePreferences: (state, action) => {
      state.preferences = action.payload;
    },
    saveAccountSetup: (state, action) => {
      state.accountSetup = action.payload;
    },

    resetOnboarding: (state) => {
      state.currentStep = 0;
      state.personalInfo = {};
      state.contactInfo = {};
      state.professionalInfo = {};
      state.preferences = {};
      state.accountSetup = {};
    },
  },
});

// Export actions so components can dispatch them
export const {
  setStep,
  savePersonalInfo,
  saveContactInfo,
  saveProfessionalInfo,
  savePreferences,
  saveAccountSetup,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;