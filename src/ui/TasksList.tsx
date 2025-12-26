import {useTasks} from "../bll/useTasks.tsx";
import {TaskItem} from "./TaskItem.tsx";

type Props = {
    selectedTaskId: string | null,
    onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export function TasksList({selectedTaskId, onTaskSelect}: Props) {

    const {tasks} = useTasks()

    if(tasks === null) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(tasks.length === 0) {
        return (
            <div>Задачи отсутствуют</div>
        )
    }

    const handleResetClick = () => {
        onTaskSelect?.(null, null)
    }

    const handleClick = (taskId: string, boardId: string) => {
        onTaskSelect?.(taskId, boardId)
    }

    return (
        <div>
            <button onClick={handleResetClick}>Сбросить</button>
            <ul>
                {
                    tasks.map((task) => {
                        return (
                            <TaskItem
                                key={task.id}
                                task={task}
                                isSelected={task.id === selectedTaskId}
                                onSelect={handleClick}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}