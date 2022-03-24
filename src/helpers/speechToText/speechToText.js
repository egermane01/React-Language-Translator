/* eslint-disable import/prefer-default-export */
export const stopRecordingProcess = (recognition, setIsRecording) => {
    setIsRecording(false)
    recognition.stop()
}

export const recordVoice = (setIsRecording, continuous, lang, interimResults, maxAlternatives, setTranslation, stopRecording) => {
    setIsRecording(true)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition()

    recognition.continuous = continuous
    recognition.lang = lang
    recognition.interimResults = interimResults
    recognition.maxAlternatives = maxAlternatives

    recognition.start()

    recognition.onresult = event => {
        const voiceInput = event.results[0][0].transcript
        setTranslation(voiceInput)
        stopRecording(recognition, setIsRecording)
    }

    recognition.onnomatch = event => {
        alert("no match", event)
        stopRecording(recognition, setIsRecording)
    }

    recognition.onerror = event => {
        alert("error: ", event.error)
        stopRecording(recognition, setIsRecording)
    }
}
