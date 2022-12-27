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
                element: <MyTasks></MyTasks>
            }, 
            {
                path: '/completed-task',
                element: <CompletedTasks></CompletedTasks>
            }
        ]
    }
]);

export default router;