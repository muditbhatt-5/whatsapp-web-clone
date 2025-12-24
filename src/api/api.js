import axios from "axios";

export const api = axios.create({
  baseURL: "https://65ec99fa0ddee626c9b0aa06.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});
