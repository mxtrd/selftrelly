// /boards/tasks
export type GlobalTaskListItemDto = {
    id: string,
    title: string,
    status: number,
    priority: number,
    addedAt: string
}
export type GlobalTaskListItemJsonApiData = {
    id: string,
    type: string,
    attributes: GlobalTaskListItemDto
}
export type GlobalTaskLisResponse = {
    data: GlobalTaskListItemJsonApiData[]
}
