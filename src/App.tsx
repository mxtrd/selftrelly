import './App.css';
import {useState} from "react";

const tasks = [
    {
        id: 1,
        title: "Купить продукты на неделю",
        isDone: false,
        addedAt: "1 сентября",
        priority: 2,
    },
    {
        id: 2,
        title: "Полить цветы",
        isDone: true,
        addedAt: "2 сентября",
        priority: 0,
    },
    {
        id: 3,
        title: "Сходить на тренировку",
        isDone: false,
        addedAt: "3 сентября",
        priority: 1,
    },
]

export function App() {

    const [selectedTaskId, setSelectedTaskId] = useState(null)

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
                    <li className='item' key={task.id} onClick={() => {
                            setSelectedTaskId(task.id)
                            // alert(task.id)
                    }
                    }
                        style={{
                            backgroundColor: task.priority >= 2 ? 'orange' : 'transparent',
                            border: task.id === selectedTaskId ? '5px solid blue' : '5px solid #000'
                    }}>
                        <div>Заголовок: <span style={{textDecoration: task.isDone ? 'line-through' : 'none'}}>{task.title}</span></div>
                        <div>Статус: <input type="checkbox" checked={task.isDone}/></div>
                        <div>Дата создания задачи: <span>{task.addedAt}</span></div>
                    </li>
                ))}
            </ul>
        </>
    )
}

