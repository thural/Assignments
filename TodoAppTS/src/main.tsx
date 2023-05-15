import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader } from "./routes/Root";
import ErrorPage from './error-page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'

import TodoDetails, {
  loader as todoLoader,
} from './routes/TodoDetails'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      children: [
        {
          path: "todos/:todoId",
          element: <TodoDetails />,
          loader: todoLoader
        },
      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </React.StrictMode>,
)
