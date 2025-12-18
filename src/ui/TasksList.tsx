import styles from "./TasksList.module.css";
import {useTasks} from "../bll/useTasks.tsx";
import { TaskItem } from "./TaskItem.tsx";

type Props = {
    selectedTaskId: string | null,
    onTaskSelect: (id: string | null) => void
}

export function TasksList({selectedTaskId, onTaskSelect}: Props) {

    const {tasks} = useTasks();

    if (tasks === null) {
        return 'загрузка...'
    }

    if (tasks.length === 0) {
        return 'Задачи отсутствуют'
    }

    const handleResetClick = () => {
        onTaskSelect?.(null)
    }

    const handleClick = (taskId: string) => {
        onTaskSelect?.(taskId)
    }

    return (
        <>
            <button onClick={handleResetClick}>Сбросить выделение</button>
            <ul className={styles.list}>
                {tasks.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            task={task}
                            isSelected={task.id === selectedTaskId}
                            onSelect={handleClick}
                        />
                    )
                })}
            </ul>
        </>
    )
}