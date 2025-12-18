import {TasksList} from "./ui/TasksList.tsx";
import {useTaskSelection} from "./bll/useTaskSelection.tsx";

export function MainPage() {

    const {taskId, setTaskId} = useTaskSelection();

    const handleTaskSelect = (id: string | null): void => {
        setTaskId(id)
    }

    return (
        <TasksList selectedTaskId={taskId} onTaskSelect={handleTaskSelect} />
    )
}

