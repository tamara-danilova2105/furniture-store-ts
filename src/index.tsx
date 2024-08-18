import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from '@/pages/About';
import { Shop } from '@/pages/Shop';
import { Suspense } from 'react';
import { App } from './component/App';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback='Loading...'><About /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback='Loading...'><Shop /> </Suspense>
            },
        ]
    },
]);

container.render(
    <RouterProvider router={router} />
)