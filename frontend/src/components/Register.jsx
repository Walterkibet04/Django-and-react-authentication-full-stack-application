import '../App.css'
import {Box} from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import {Link} from 'react-router-dom'


const Register = ()=>{
    return(
        <div className={'myBackground'}>
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                    <Box className={"title"}>Create an account</Box>
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
                    <MyPassField label ={"Confirm Password"}/>
                </Box>
                <Box className={"itemBox"}>
                    <MyButton label={"Register"}/>
                </Box>
                <Box className={"itemBox"}>
                    <Link to="/">Already have an account? Login</Link>
                </Box>

            </Box>
        </div>
    )
}

export default Register