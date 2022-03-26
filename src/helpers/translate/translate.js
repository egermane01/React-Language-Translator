/* eslint-disable import/prefer-default-export */
import { translateText } from "../../services/translateText"

export const translate = async (setTranslation, inputLanguage, outputLanguage, inputText, saveToHistory) =>
    translateText(inputText, inputLanguage, outputLanguage)
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
        .catch(err => alert(err.response.data.error))
