/* eslint-disable import/prefer-default-export */
import { makeServiceCall } from "../../services/wrapper/serviceWrapper"

export const translate = async (setTranslation, inputLanguage, outputLanguage, inputText, saveToHistory) =>
    makeServiceCall("post", { "Content-Type": "application/json" }, "https://libretranslate.de/translate", {
        q: inputText,
        source: inputLanguage,
        target: outputLanguage,
        format: "text",
    })
        .then(async res => {
            const outputText = res.data.translatedText
            setTranslation(outputText)

            let parsedHistory = JSON.parse(localStorage.getItem("history"))
            if (parsedHistory == null) {
                parsedHistory = []
            }
            parsedHistory.push({
                inputLanguage,
                outputLanguage,
                inputText,
                outputText,
            })
            saveToHistory(parsedHistory)
            localStorage.setItem("history", JSON.stringify(parsedHistory))
        })
        .catch(err => alert(err))
