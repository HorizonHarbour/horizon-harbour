import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../src/pages/AppLayout.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";
import Companies from "./pages/Companies/Companies.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="companies" element={<Companies />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
