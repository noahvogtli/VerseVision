import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Chat from "./components/Chat";
import Homepage from "./components/Homepage";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/", element: <Homepage /> },
      { path: "chat", element: <PrivateRoute><Chat /></PrivateRoute>},
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Signin /> }
    ]
  }
]);