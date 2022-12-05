// import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, THEMES } from "./component/Context/theme";
import PatientForm from "./component/Patient/Main Form";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HistoryForm from "./component/History/Main Layout";
import Layout from "./component/Layouts/Form Layout";
import Login from "./component/Pages/Login/Login";
import { UserAuthProvider } from "./component/Context/Auth";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Patients",
        element: <PatientForm />,
      },
      {
        path: "Patients/:id/History",
        element: <HistoryForm />,
      },
      {
        path: "History",
        element: <HistoryForm />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
function App() {
  return (
    <ThemeProvider>
      <UserAuthProvider>
        <RouterProvider router={rout} />
      </UserAuthProvider>
    </ThemeProvider>
  );
}

export default App;
