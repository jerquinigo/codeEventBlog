import axios from "axios";

export const getAllUsers = async () =>  await axios.get("/api/users/");