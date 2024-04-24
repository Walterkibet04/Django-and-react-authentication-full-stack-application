import '../App.css'
import {Box} from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import {Link} from 'react-router-dom'
const Login = ()=>{
    return(
        <div className={'myBackground'}>
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                    <Box className={"title"}>Login Now</Box>
                </Box>
                <Box className={"itemBox"}>
                    <MyTextField
                      label = {"Email"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <MyPassField label ={"password"}/>
                </Box>
                <Box className={"itemBox"}>
                    <MyButton label={"login"}/>
                </Box>
                <Box className={"itemBox"}>
                    <Link to="/register">I dont have an account? register</Link>
                </Box>

            </Box>
        </div>
    )
}

export default Login