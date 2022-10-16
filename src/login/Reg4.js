import React from 'react'
import { useFormik, Field, Form, Formik } from "formik"
import { Grid, TextField, Typography, Box, ThemeProvider, createTheme, Container } from '@mui/material'

const theme = createTheme();

const Reg4 = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">

                    <Typography variant="h4" mt={6} mb={6}>Registration Form</Typography>
                    <Box component="form" sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >>

                        <TextField
                            label="Enter your name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "300px", m: 1 }}
                            name="firstName"
                        />
                        <TextField
                            label="Last Name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "300px", m: 1 }}
                            name="lastName"
                        />
                        <TextField
                            label="First Name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "300px", m: 1 }}
                            name="firstName"
                        />
                        <TextField
                            label="First Name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "300px", m: 1 }}
                            name="firstName"
                        />
                        <TextField
                            label="First Name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "300px", m: 1 }}
                            name="firstName"
                        />
                    </Box>
                    </Container>
            </ThemeProvider>
        </>
    )
}

export default Reg4