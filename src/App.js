import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MetalistFullHistoryPage from "./components/MetalistFullHistoryPage";
import SiteHeader from "./components/SiteHeader";

export default function App() {
  return (
    <div className="site">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history_of_metalist" element={<MetalistFullHistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
