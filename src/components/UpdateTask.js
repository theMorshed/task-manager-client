import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateTask = () => {
    const navigate = useNavigate();
    const task = useLoaderData();
    const {_id} = task;
    const updateTask = e => {
        e.preventDefault();
        const form = e.target;
        const task = form.task.value;

        fetch(`https://task-manager-server-nu.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({task})
        })
            .then(res => res.json())
            .then(data => {
                navigate('/my-task');
            })
    }
    return (
        <div>
            <form onSubmit={updateTask}>
                <div className="mb-6">
                    <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Task</label>
                    <input type="text" name="task" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={task.task} required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>
        </div>
    );
};

export default UpdateTask;