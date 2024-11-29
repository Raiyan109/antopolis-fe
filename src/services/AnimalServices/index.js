'use server'

import axios from "axios";

export const getAnimals = async () => {
    try {
        await fetch(`https://antopolis-ts.vercel.app/api/v1/animal`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => console.log(data.data, 'from server')
            )

        return data.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
    }
}

export const createAnimal = async (animal) => {
    try {
        const { data } = await fetch("https://antopolis-ts.vercel.app/api/v1/animal", {
            method: 'POST',
            body: JSON.stringify(animal)
        });
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}