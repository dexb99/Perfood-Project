import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function QuestData() {
    const [questData, setQuestData] = useState([])
    const [choiceData, setChoiceData] = useState([])
    // const [combineData, setCombineData] = useState([])
    const getQuestData = () => {
        axios.get('http://localhost:3001/question').then((response) => {
            setQuestData(response.data);
        })
    }
    const getChoiceData = () => {
        axios.get('http://localhost:3001/choice').then((response) => {
            setChoiceData(response.data);
        })
    }

    const combineData = questData.map((question, index) => ({
        id: question.Question_ID,
        question: question.Question_Text,
        surveyID: question.Survey_ID,
        choice: choiceData.filter(choice => choice.Question_ID === question.Question_ID).map(choice => ({
            choiceID: choice.Choice_ID,
            choiceText: choice.Choice_text,
            score: choice.Choice_Score
        }))
    }))
    useEffect(() => {
        getChoiceData();
        getQuestData();
    }, [])


    return (
        combineData
    )
}
