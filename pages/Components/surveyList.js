import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
export default function surveyList() {
    const [surveyList, setSuveyList] = useState([])
    const getSuveyList = () => {
        axios.get('http://localhost:3001/getSurvey').then((response) => {
            setSuveyList(response.data);
        })
    }
useEffect(()=>{
    getSuveyList();
},[])
    return (
        surveyList
    )
}
