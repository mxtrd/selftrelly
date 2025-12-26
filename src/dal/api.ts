const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if(!apiKey)  return undefined

    return {
        'api-key': apiKey
    }
}

type GlobalTaskListItemDto = {
    boardId: string,
    title: string | null,
    status: number,
    addedAt: string
}
export type GlobalTaskListItemJsonApiData = {
    id: string,
    attributes: GlobalTaskListItemDto
}
type GlobalTaskListResponse = {
    data: GlobalTaskListItemJsonApiData[]
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}

type TaskDetailsDto = {
    title: string | null,
    boardTitle: string,
    description: string | null
}
export type TaskDetailsData = {
    id: string,
    attributes: TaskDetailsDto
}
type GetTaskOutput = {
    data: TaskDetailsData
}
export const getTask = (taskId: string, boardId: string) => {
    const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}