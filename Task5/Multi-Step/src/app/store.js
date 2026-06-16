import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "../features/onboarding/onboardingSlice";

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

store.subscribe(() => {
  const state = store.getState().onboarding;
  localStorage.setItem("onboardingData", JSON.stringify(state));
});

export default store;