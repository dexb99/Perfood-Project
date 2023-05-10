import { useState, useEffect } from 'react'
import axios from 'axios'
export default function PersonalByID() {
    const [personal, setPersonal] = useState([])
    const getPerByID = () => {
        const PER_ID = JSON.parse(localStorage.getItem('PER_ID'))
        PER_ID.map(perid => {
            const id = perid.PER_ID
            axios.get(`http://localhost:3001/personal/${id}`).then((response) => {
                setPersonal(response.data)
            })
        })
    }
    useEffect(() => {
        getPerByID();
    }, [])
    return (
        personal
    )
}
