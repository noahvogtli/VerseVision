import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Chat from "./components/Chat";
import Homepage from "./components/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "chat", element: <Chat /> },
      { path: "signup", element: <Signup /> },
      { path: "signin", element: <Signin /> }
    ]
  }
]);