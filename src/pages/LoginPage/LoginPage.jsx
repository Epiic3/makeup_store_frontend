import React from "react";
import LoginForm from "./Components/LoginForm";
import { Container } from "@mui/material";

export default function LoginPage() {
    return (
        <Container maxWidth={false} sx={{ 
            height: "100vh",
            width: "100vw",
            backgroundSize: "100% 100%",
            backgroundPosition: "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
            backgroundImage: "radial-gradient(75% 60% at -3% 4%, #014a77 0%, #FFFFFF00 97%),radial-gradient(60% 50% at 76% 93%, #4d1538 0%, #FFFFFF00 97%),radial-gradient(200% 200% at 88% 13%, #0D0E31FF 0%, #FFFFFF00 97%),radial-gradient(200% 200% at 5% 97%, #02122b 0%, #FFFFFFFF 99%),radial-gradient(150% 150% at 47% 68%, #02122b 0%, #FFFFFFFF 99%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0
        }}>
            <LoginForm />
        </Container>
    )
}