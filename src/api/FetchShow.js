import axios from 'axios'



export default function FetchShow() {
    let result;
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res => {
            return res.data
        });
}