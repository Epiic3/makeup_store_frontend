import React from "react";
import LoginForm from "./Components/LoginForm";
import { Container } from "@mui/material";

export default function LoginPage() {
    return (
        <Container sx={{ 
            height: "100vh",
            width: "100vw",
            backgroundSize: "100% 100%",
            backgroundPosition: "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
            backgroundImage: "radial-gradient(75% 75% at 4% 12%, #004d7a 0%, #073AFF00 78%),radial-gradient(80% 80% at 75% 101%, #521639 0%, #073AFF00 78%),radial-gradient(80% 80% at 75% 8%, #0d0f32 0%, #073AFF00 78%),radial-gradient(80% 80% at -6% 87%, #00142a 0%, #073AFF00 78%),radial-gradient(75% 75% at 81% 12%, #0d0f32 0%, #0d0f32 64%, #0d0f32 98%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0
        }}>
            <LoginForm />
        </Container>
    )
}