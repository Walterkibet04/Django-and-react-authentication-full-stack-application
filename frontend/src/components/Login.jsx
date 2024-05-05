import '../App.css'
import {Box} from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AxiosInstance from './forms/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import MyMessage from './Message'


const Login = ()=>{
    const navigate = useNavigate()

    const {handleSubmit, control} = useForm()
    const [ShowMessage, setShowMessage] = useState(false)

    const submission = (data) =>{
        AxiosInstance.post(`login/`,
         {
            email: data.email,
            password:data.password ,
         })
        .then((response)=>{
            console.log(response)
            localStorage.setItem('Token',response.data.token)
            navigate('/home')
         })
        .catch((error)=>{
            setShowMessage(true)
            console.error("Error during login", error)
         })
    }

    return(
        <div className={'myBackground'}>
        {ShowMessage ? <MyMessage text={"Invalid credentials please try again"} color={'#69C9AB'}/> : null}

            <form onSubmit={handleSubmit(submission)}>
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                    <Box className={"title"}>Login Now</Box>
                </Box>
                <Box className={"itemBox"}>
                    <MyTextField
                      label = {"Email"}
                      name = {"email"}
                      control = {control}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <MyPassField 
                       label ={"Password"}
                       name = {"password"}
                       control = {control}
                       />
                </Box>
                <Box className={"itemBox"}>
                    <MyButton label={"login"} type={"submit"}/>
                </Box>
                <Box className={"itemBox"} sx={{flexDirection:'column'}} >
                    <Link to="/register" >I dont have an account? register</Link>
                    <Link to="/request/password_reset">Forgot Password ?: Click here</Link>
                </Box>

            </Box>
            </form>
        </div>
    )
}

export default Login
