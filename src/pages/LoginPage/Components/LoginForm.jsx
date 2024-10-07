import React from "react";
import { Box, Button, Container, InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginForm() {
    return (
        <Container
            sx={{
                background: "rgba( 255, 255, 255, 0.2 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 1.5px )",
                webkitBackdropFilter: "blur( 1.5px )",
                borderRadius: "10px",
                width: "35%",
            }}
        >
            <Container sx={{ textAlign: "center", my: "30px" }}>
                <Typography variant="h5" color="white" fontWeight="bold">Inicia sesión</Typography>
            </Container>
            <Container sx={{ margin: "auto", my: "30px", display: "grid", placeItems: "center" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: "80%", my: "15px" }}>
                    <TextField
                        id="email-input"
                        variant="standard"
                        placeholder="Correo"
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                                sx: {
                                    '&::before': {
                                        borderBottom: '1px solid gray',
                                    },
                                    '&:hover::before': {
                                        borderBottom: '1px solid gray',
                                    },
                                    '&.Mui-focused::before': {
                                        borderBottom: '1px solid white',
                                    }
                                }
                            },
                            inputLabel: {
                                shrink: true
                            }
                        }}
                        sx={{
                            '& input::placeholder': {
                            color: 'white'
                            }
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: "80%", my: "15px" }}>
                    <TextField
                        id="email-input"
                        variant="standard"
                        placeholder="Contraseña"
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                                sx: {
                                    '&::before': {
                                        borderBottom: '1px solid gray',
                                    },
                                    '&:hover::before': {
                                        borderBottom: '1px solid gray',
                                    },
                                    '&.Mui-focused::before': {
                                        borderBottom: '1px solid white',
                                    }
                                }
                            },
                            inputLabel: {
                                shrink: true
                            }
                        }}
                        sx={{
                            '& input::placeholder': {
                            color: 'white'
                            }
                        }}
                    />
                </Box>

                <Button>Enviar</Button>

            </Container>
        </Container>
    );
}