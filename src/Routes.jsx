import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/" }],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
