import './App.css';
import {useEffect, useState} from "react";

type GlobalTaskListItemDto = {
    id: string,
    title: string,
    status: number,
    priority: number,
    addedAt: string
}

type GlobalTaskListItemJsonApiData = {
    id: string,
    type: string,
    attributes: GlobalTaskListItemDto
}

export function App() {

    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
    const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)

    const prepareHeaders = () => {
        const apiKey = import.meta.env.VITE_API_KEY
        if(!apiKey) return undefined
        return {
            'api-key' : apiKey
        }
    }

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: prepareHeaders()
        }).then(res => res.json())
            .then(json => setTasks(json.data))
    }, [])

    if (tasks === null) {
        return 'загрузка...'
    }

    if (tasks.length === 0) {
        return 'Задачи отсутствуют'
    }

    return (
        <>
            <button onClick={() => setSelectedTaskId(null)}>Сбросить выделение</button>
            <ul className='list'>
                {tasks.map((task) => (
                    <li className='item' key={task.id} onClick={() => {setSelectedTaskId(task.id)}}
                        style={{
                            backgroundColor: task.attributes.priority >= 2 ? 'orange' : 'transparent',
                            border: task.id === selectedTaskId ? '5px solid blue' : '5px solid #000'
                    }}>
                        <div>Заголовок: <span style={{textDecoration: task.attributes.status === 2 ? 'line-through' : 'none'}}>{task.attributes.title}</span></div>
                        <div>Статус: <input type="checkbox" checked={task.attributes.status === 2} readOnly/></div>
                        <div>Дата создания задачи: <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></div>
                    </li>
                ))}
            </ul>
        </>
    )
}

