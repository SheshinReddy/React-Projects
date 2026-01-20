import HomePage from "@/pages/HomePage";
import ToggleGrid from "@/projects/toggle-grid/ToggleGrid";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/toggle-grid" element={<ToggleGrid />} />
        </Routes>
    )
}

export default AppRoutes;