import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import { HomePage } from "../pages/HomePage";
import { CountryDetailsPage } from "../pages/CountryDetailsPage";
import { CountryRegionPage } from "../pages/CountryRegionPage";

export const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryDetailsPage />} />
        <Route
          path="/country-region/:regionName"
          element={<CountryRegionPage />}
        />
      </Routes>
    </MainLayout>
  );
};
