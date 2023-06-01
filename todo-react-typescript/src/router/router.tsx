import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":id",
        element: <TodoDetail />,
      },
    ],
  },
]);