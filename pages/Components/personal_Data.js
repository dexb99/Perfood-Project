import { useState, useEffect } from 'react'
import axios from 'axios'
export default function personalData() {
    const [personal, setPersonal] = useState([])
    const [imgById, setimgById] = useState([])
    const [personData, setPersonData] = useState([])
    const getPersonal = () => {
        axios.get('http://localhost:3001/personal').then((response) => {
            setPersonal(response.data);
        })
    }
    useEffect(() => {
        getPersonal();
    }, [])

    return (
        personal
    )
}
