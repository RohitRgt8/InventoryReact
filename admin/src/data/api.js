import axios from "axios";

export const MONGO_URI = "mongodb+srv://rohit008:rohitrgt8@cluster0.ypxjwp2.mongodb.net/"

export const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000"
});