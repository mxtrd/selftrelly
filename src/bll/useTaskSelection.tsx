import {useState} from "react";

export function useTaskSelection() {
    const [taskId, setTaskId] = useState<string | null>(null)

    return {taskId, setTaskId}
}