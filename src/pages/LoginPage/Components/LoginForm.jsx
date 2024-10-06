import React from "react";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginForm() {
    return (
        <Container>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <TextField
                    id="email-input"
                    variant="standard"
                    placeholder="Correo"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: 'action.active' }} />
                                </InputAdornment>
                            )
                        },
                        inputLabel: {
                            shrink: true
                        }
                    }}
                />
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <TextField
                    id="email-input"
                    variant="standard"
                    placeholder="Contraseña"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon sx={{ color: 'action.active' }} />
                                </InputAdornment>
                            ),
                        },
                        inputLabel: {
                            shrink: true
                        }
                    }}
                />
            </Box>
        </Container>
    );
}