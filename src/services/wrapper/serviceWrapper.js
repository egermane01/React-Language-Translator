/* eslint-disable import/prefer-default-export */
import axios from "axios"

export const makeServiceCall = (method, url, data, headers = { "Content-Type": "application/json" }) =>
    axios({
        method,
        headers,
        url,
        data,
    })
