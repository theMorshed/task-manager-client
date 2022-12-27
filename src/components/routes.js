import { createBrowserRouter } from "react-router-dom";
import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import Layout from "./Layout";
import MyTasks from "./MyTasks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path: '/my-task',
                loader: () => fetch('http://localhost:5000/my-task'),
                element: <MyTasks></MyTasks>
            }, 
            {
                path: '/completed-task',
                loader: () => fetch('http://localhost:5000/completetask'),
                element: <CompletedTasks></CompletedTasks>
            }
        ]
    }
]);

export default router;