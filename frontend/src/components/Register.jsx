import '../App.css'
import {Box} from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './forms/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const Register = ()=>{
    const navigate = useNavigate()

    const schema = yup
    .object({
        email: yup.string().email('please provide a valid email address').required('Email is a required field'),
        password: yup.string()
          .required('password is required')
          .min(8, 'password must be atleast 8 characters long')
          .matches(/[A-Z]/, 'Password must contain atleast one uppercase letter')
          .matches(/[a-z]/, 'Password must contain atleast one lowercase letter')
          .matches(/[0-9]/, 'Password must contain atleast one number')
          .matches(/[@#$&*()!%^,.:;?<>+-]/, 'Password must contain atleast one special character'),

        password2: yup.string().required('password confirmation is required')
                     .oneOf([yup.ref('password'),null], 'passwords do not match')
    })

    const {handleSubmit, control} = useForm({resolver: yupResolver(schema)})
    
    const submission = (data) =>{
        AxiosInstance.post(`register/`,
         {
            email: data.email,
            password:data.password ,
         })
         .then(()=>{
            navigate('/')
         })
    }

    return(
        <div className={'myBackground'}>
            <form onSubmit={handleSubmit(submission)} >
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                    <Box className={"title"}>Create an account</Box>
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
                       label ={"password"} 
                       name = {"password"}
                       control = {control}/>
                </Box>

                <Box className={"itemBox"}>
                    <MyPassField 
                       label ={"Confirm Password"}
                       name = {"password2"}
                       control = {control}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyButton type={"submit"} label={"Register"}/>
                </Box>

                <Box className={"itemBox"}>
                    <Link to="/">Already have an account? Login</Link>
                </Box>

            </Box>
            </form>
        </div>
    )
}

export default Register