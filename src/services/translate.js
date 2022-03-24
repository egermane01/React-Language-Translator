/* eslint-disable import/prefer-default-export */
import axios from "axios"

export const translate = (textToTranslate, inputLanguage, outputLanguage) => {
    axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: "https://libretranslate.de/translate",
        data: {
            q: textToTranslate,
            source: inputLanguage,
            target: outputLanguage,
            format: "text",
        },
    })
}
