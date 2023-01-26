import axios from 'axios';

const apiKey = process.env.ADS_API_KEY;

const ADSCONFIG = {
    method: 'get',
    url: 'https://api.adsabs.harvard.edu/v1/search/query/?q=author:"safron ,emily j"&fl=pubdate,issue,author,title, page, volume, bibcode&rows=30&sort=date desc',
    headers: {
        'Authorization': 'Bearer '+apiKey,
        'access-control-allow-credentials': 'true',
        'content-Type': 'application/json',
        "Accept": "/",
        "Cache-Control": "no-cache",
        // "Cookie": document.cookie
    },
    credentials: "same-origin",
}

axios.defaults.withCredentials=true;


/**
 * -----ADS-----
 * the ADS API call is being a butt.
 * it demands a specific cookie which react won't let you set for security reasons.
 * to update ADS publications section, use parameter above in postman to receive data call.
 * 
 * -----arXiv-----
 * this data call from postman seems to work, since the ADS call isn't working from the front, I'm just gonna copy the return into the component.
 * this call returns xml which could easily go right into react.
 * the problem is that the query parameters are too broad and keep returning papers from Adam Safron too.
 * 
 * 
 */
const api = {
    getADS: function() {
        return axios(
            ADSCONFIG
        );
    },

    getARXIV: function() {
        return axios.get("TBD");
    }
}

export default api;