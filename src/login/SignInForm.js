import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik, } from 'formik';
import * as Yup from "yup";
import { Snackbar } from '@mui/material';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
const hardcode = {
    sign: "Sign In",
    forgetpw: "Forgot password?"

}

const initialValues = {
    fname: "",
    email: "",
    password: "",
}
const inputValidation = Yup.object({
    fname: Yup.string().min(2).max(25).required("Enter your Name").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().email().required("Enter valid Email"),
    password: Yup.string().min(6).required("Enter valid password")
        .matches(/[A-Z]/, 'must contain one uppercase')
        .matches(/([a-z])/, 'must contain one lowercase')
        .matches(/(\d)/, 'must contain one number')
        .matches(/(\W)/, 'must contain one special character'),
})

const SignInForm = () => {

    const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
        initialValues,
        validationSchema: inputValidation,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }

    })
    const [open,setOpen]=React.useState(false);

    const handleClick =()=>{
     inputValidation() && setOpen();
     };
     const handleClose=(reason)=>{
        if(reason==='clickaway'){
            return NaN;
        }
        setOpen(false);
     }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Enter Name"
                                name="fname"
                                type="text"
                                //autoComplete="name"
                                autoFocus
                                value={values.fname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.fname && touched.fname ? (errors.fname) : null}
                                helperText={errors.fname}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.email && touched.email ? (errors.email) : null}
                                helperText={errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password && touched.password ? (errors.password) : null}
                                helperText={errors.password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClick}
                            >
                                {hardcode.sign}
                            </Button>
                            <Snackbar
                            open={open}
                            autoHideDuration={8000}
                            onClose={handleClose}
                            message="Sign In successfully"
                            />
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        {hardcode.forgetpw}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    )
}

export default SignInForm
