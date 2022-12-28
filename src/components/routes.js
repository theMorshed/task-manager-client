import { createBrowserRouter } from "react-router-dom";
import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import Layout from "./Layout";
import MyTasks from "./MyTasks";
import UpdateTask from "./UpdateTask";

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
                loader: () => fetch('https://task-manager-server-nu.vercel.app/my-task'),
                element: <MyTasks></MyTasks>
            }, 
            {
                path: '/completed-task',
                loader: () => fetch('https://task-manager-server-nu.vercel.app/completetask'),
                element: <CompletedTasks></CompletedTasks>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://task-manager-server-nu.vercel.app/update/${params.id}`),
                element: <UpdateTask></UpdateTask>
            },
        ]
    }
]);

export default router;