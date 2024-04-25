import { useEffect, useMemo, useState } from "react"
import {Box} from '@mui/material'
import AxiosInstance from './forms/AxiosInstance'

const Home = ()=>{
    const GetData = () =>{
        AxiosInstance.get(`users/`).then((res) =>{
            
        })
    }
    return(
        <div>
            This is Home page
        </div>
    )
}

export default Home