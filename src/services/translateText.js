/* eslint-disable import/prefer-default-export */
import { makeServiceCall } from "./wrapper/serviceWrapper"

export const translateText = (textToTranslate, inputLanguage, outputLanguage) =>
    makeServiceCall("post", "https://libretranslate.de/translate", {
        q: textToTranslate,
        source: inputLanguage,
        target: outputLanguage,
        format: "text",
    })
