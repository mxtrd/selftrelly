import {useEffect, useState} from "react";
import type {GlobalTaskListItemJsonApiData} from "../dal/types.ts";
import {getTasks} from "../dal/api.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)

    useEffect(() => {
        getTasks().then(json => setTasks(json.data))
    }, [])

    return {tasks}
}