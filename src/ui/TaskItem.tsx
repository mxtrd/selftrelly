import styles from "./TaskItem.module.css";
import type {GlobalTaskListItemJsonApiData} from "../dal/types.ts";
import clsx from "clsx";

type Props = {
    task: GlobalTaskListItemJsonApiData,
    isSelected: boolean,
    onSelect: (taskId: string) => void
}

export function TaskItem({task, isSelected, onSelect} : Props)  {

    const handleClick = () => onSelect?.(task.id)

    const className = clsx({
        [styles.item]: true,
        [styles.selected]: isSelected,
    })

    return (
        <li className={className} key={task.id} onClick={handleClick}
            style={{
                backgroundColor: task.attributes.priority >= 2 ? 'orange' : 'transparent',
            }}>
            <div>Заголовок: <span style={{textDecoration: task.attributes.status === 2 ? 'line-through' : 'none'}}>{task.attributes.title}</span></div>
            <div>Статус: <input type="checkbox" checked={task.attributes.status === 2} readOnly/></div>
            <div>Дата создания задачи: <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></div>
        </li>
    )
}