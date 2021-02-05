import axios from 'axios';
const KEY = "AIzaSyBM5GYxseqcoIWAvqgAho1mdi-HWZtTjPs";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})