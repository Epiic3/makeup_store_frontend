import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>

        </BrowserRouter>
    )
}