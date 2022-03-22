import React, { useState } from "react"
import CustomInput from "../components/CustomInput"
import CustomOutput from "../components/CustomOutput"
import CustomButton from "../components/CustomButton"

function Translator() {
    const [textToTranslate, setTextToTranslate] = useState("")
    const [translatedOutput, setTranslatedOutput] = useState("")

    const translate = async (text = textToTranslate) => {
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: "en",
                target: "tr",
                format: "text",
            }),
            headers: { "Content-Type": "application/json" },
        })

        const translatedObject = await res.json()
        setTranslatedOutput(translatedObject.translatedText)
    }

    const recordVoice = () => {
        // eslint-disable-next-line no-undef
        const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

        const recognition = new SpeechRecognition()

        recognition.continuous = true
        recognition.lang = "en-US"
        recognition.interimResults = false
        recognition.maxAlternatives = 1

        recognition.start()

        recognition.onresult = event => {
            const voiceInput = event.results[0][0].transcript
            setTextToTranslate(voiceInput)
            translate(voiceInput)
        }

        recognition.onnomatch = event => {
            console.log("no match", event)
        }

        recognition.onerror = event => {
            console.log("error: ", event.error)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <CustomInput id="translate-input" name="translate-input" rows="4" cols="40" onChange={e => setTextToTranslate(e.target.value)} value={textToTranslate} />
                <CustomOutput id="translate-output" name="translate-output" rows="4" cols="40" value={translatedOutput} />
                <CustomButton title="Record" onClick={() => recordVoice()} id="record-button" name="record-button" />
                <CustomButton title="Translate" onClick={() => translate()} id="translate-button" name="translate-button" />
            </header>
        </div>
    )
}

export default Translator
