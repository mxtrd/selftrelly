import type {GlobalTaskLisResponse} from "./types.ts";

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if(!apiKey) return undefined
    return {
        'api-key' : apiKey
    }
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskLisResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}