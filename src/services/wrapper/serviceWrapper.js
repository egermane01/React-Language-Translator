/* eslint-disable import/prefer-default-export */
import axios from "axios"

export const makeServiceCall = (method, headers, url, data) =>
    axios({
        method,
        headers,
        url,
        data,
    })
