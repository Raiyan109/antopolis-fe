'use server'

import axios from "axios";

export const getAnimals = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/animal`);

        return data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
    }
}