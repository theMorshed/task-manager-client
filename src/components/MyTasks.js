import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyTasks = () => {
    const tasks = useLoaderData();

    const handleComplete = id => {
        // update order status unsold to sold
        fetch(`http://localhost:5000/updatetask/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(result => {
                
            })
    }

    return (
        <div>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Task Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task => <tr key={task._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.task}
                                </th>                                
                                <td className="py-4 px-6">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={() => handleComplete(task._id)} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Complete</button>
                                </td>
                            </tr>)
                        }                     
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyTasks;