'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [count, setCount] = useState(0);

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false };

            setTaskList([...taskList, newTask]);

            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    const toggleComplete = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        // console.log(temp);
        
        setTaskList([...temp]);
    }

    return (
        <div>
            <h3 className='text-center text-3xl font-bold my-6'>Todo List</h3>
            <div className='max-w-[80%] mx-auto'>
                <p className='text-3xl'>{count}</p>
                <button className='border p-3'
                    onClick={() => { setCount(count + 1); console.log(count); }} >Add Count</button>
                <div className='rounded border border-gray-300 shadow'>
                    <div className='p-5'>
                        <input
                            onKeyDown={addNewTask}
                            type="text"
                            className='w-full rounded bg-gray-200 p-3'
                        />
                    </div>
                    <div className='border-t border-gray-300 p-5'>
                        {
                            taskList.map((task, index) => {
                                return (
                                    <div className='border p-3 rounded mb-4'>
                                        {
                                            task.completed ?
                                                <p className='bg-green-500 text-white px-3 rounded-full w-fit'>Completed</p> :
                                                <p className='bg-yellow-500 text-white px-3 rounded-full w-fit'>Pending</p>
                                        }
                                        <h2>{task.text}</h2>
                                        <div className='flex mt-3 gap-4'>
                                            <button
                                                onClick={() => { deleteTask(index) }}
                                                className='bg-red-500 rounded-full py-1 px-3 text-white'
                                            >Delete</button>
                                            <button
                                                onClick={() => { toggleComplete(index) }}
                                                className={`bg-${task.completed ? 'green' : 'blue'}-500 rounded-full py-1 px-3 text-white`}
                                            >{task.completed ? 'Undo' : 'Complete Task'}</button>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoList;