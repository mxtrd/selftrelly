import {useTaskDetails} from "../bll/useTaskDetails.tsx";
import styles from "./TaskDetails.module.css";

type Props = {
    taskId: string | null,
    boardId: string | null
}

export function TaskDetails({taskId, boardId}: Props) {

    const {taskDetails} = useTaskDetails(taskId, boardId);


    return (
        <div className={styles.task}>
            <h2>Task details</h2>
            {!taskDetails && !taskId && 'Task is not selected'}
            {!taskDetails && taskId && 'loading'}
            {taskDetails && taskId && taskDetails.id !== taskId && 'loading'}
            {
                taskDetails &&
                <div>
                    <h3>title - {taskDetails.attributes.title}</h3>
                    <div>board title - {taskDetails.attributes.boardTitle}</div>
                    <div>description - {taskDetails.attributes.description}</div>
                </div>
            }
        </div>
    )
}