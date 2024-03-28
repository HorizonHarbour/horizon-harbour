import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../src/pages/AppLayout.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";
import Companies from "./pages/Companies/Companies.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";

import { useAuth } from "./customHooks/useAuth.js";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  const isAuthenticated = useAuth();
  // const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId="14533103941-0nug3n80jq4jkkgdd3cs3jjqi8fvnnvf.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route
              path="jobs"
              element={isAuthenticated ? <Jobs /> : <Navigate to="/login" />}
            />
            <Route
              path="companies"
              element={isAuthenticated ? <Companies /> : <Login />}
            />
            <Route
              path="login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="signup"
              element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
