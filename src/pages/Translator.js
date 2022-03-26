/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useCallback } from "react"
import { faXmark, faMicrophone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CustomArea from "../components/CustomArea/CustomArea"
import CustomButton from "../components/CustomButton/CustomButton"
import CustomTable from "../components/CustomTable/CustomTable"
import CustomSelectBox from "../components/CustomSelectBox/CustomSelectBox"
import getLanguages from "../services/language"
import { stopRecordingProcess, recordVoice } from "../helpers/speechToText/speechToText"
import { translate } from "../helpers/translate/translate"
import "./Translator.scss"

const columns = [
    {
        Header: "Input Language",
        accessor: "inputLanguage",
    },
    {
        Header: "Output Language",
        accessor: "outputLanguage",
    },
    {
        Header: "Text",
        accessor: "inputText",
    },
    {
        Header: "Translation",
        accessor: "outputText",
    },
]

function Translator() {
    const [textToTranslate, setTextToTranslate] = useState("")
    const [translatedOutput, setTranslatedOutput] = useState("")
    const [isRecording, setIsRecording] = useState(false)
    const [inputLanguage, setInputLanguage] = useState("")
    const [outputLanguage, setOutputLanguage] = useState("")
    const [languages, setLanguages] = useState([])
    const [translationHistory, setTranslationHistory] = useState([])

    const clearIO = () => {
        setTextToTranslate("")
        setTranslatedOutput("")
    }

    const clearTable = () => {
        localStorage.setItem("history", null)
        setTranslationHistory([])
    }

    const handleSelectLanguages = (isInput, event) => {
        if (isInput) {
            setInputLanguage(event.target.value)
        } else {
            setOutputLanguage(event.target.value)
        }
    }

    const cachedTranslate = useCallback(() => {
        translate(setTranslatedOutput, inputLanguage, outputLanguage, textToTranslate, setTranslationHistory)
    }, [setTranslatedOutput, inputLanguage, outputLanguage, textToTranslate, setTranslationHistory])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (textToTranslate && inputLanguage && outputLanguage) cachedTranslate()
        }, 1500)

        return () => clearTimeout(timer)
    }, [inputLanguage, outputLanguage, textToTranslate, cachedTranslate])

    useEffect(() => {
        setLanguages(getLanguages())

        const history = JSON.parse(localStorage.getItem("history"))
        setTranslationHistory(history || [])
    }, [])

    return (
        <div className="container">
            <div className="io-container">
                <CustomArea
                    type="Input"
                    id="translate-input"
                    name="translate-input"
                    rows="4"
                    cols="40"
                    onChange={e => setTextToTranslate(e.target.value)}
                    value={textToTranslate}
                    controls={
                        <div className="controls-container">
                            <div className="buttons-container">
                                <CustomButton onClick={() => clearIO()} id="record-button" name="record-button" className="control-button" icon={<FontAwesomeIcon className="input-control" icon={faXmark} />} />
                                <CustomButton
                                    onClick={() => recordVoice(setIsRecording, true, inputLanguage, false, 1, setTextToTranslate, stopRecordingProcess)}
                                    id="record-button"
                                    name="record-button"
                                    className={isRecording ? "control-button recording" : "control-button"}
                                    icon={<FontAwesomeIcon className="input-control" icon={faMicrophone} />}
                                />
                            </div>
                            <CustomSelectBox onChange={e => handleSelectLanguages(true, e)} id="select-input-language" name="select-input-language" value={inputLanguage} options={languages} />
                        </div>
                    }
                />
                <CustomArea
                    type="Output"
                    id="translate-output"
                    name="translate-output"
                    rows="4"
                    cols="40"
                    disabled
                    value={translatedOutput}
                    controls={
                        <div className="controls-container">
                            <CustomSelectBox onChange={e => handleSelectLanguages(false, e)} id="select-output-language" name="select-output-language" value={outputLanguage} options={languages} />
                        </div>
                    }
                />
            </div>
            <div className="table-container">
                {translationHistory.length > 0 && <CustomButton onClick={() => clearTable()} id="clear-history-button" name="clear-history-button" className="clear-history-button" icon={<FontAwesomeIcon className="input-control" icon={faXmark} />} />}
                <CustomTable id="translation-history-table" name="translation-history-table" columns={columns} data={translationHistory} title="Translation History" />
            </div>
        </div>
    )
}

export default Translator
