import { Input, TextField, Typography } from "@mui/material";


const Login = () => {
    return (
        <>

            <Typography variant="h2" align="center">Login</Typography>

            <TextField id="outlined-basic" label="E-mail" required variant="outlined" />

            <TextField type="password" id="outlined-basic" label="******" variant="outlined" />

        </>

    )

}

export default Login;
