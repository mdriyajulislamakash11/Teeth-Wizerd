import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../component/Home/Home";
import AllTreatments from "../component/AllTreaments/AllTreatments";
import MyAppoinmen from "../component/MyAppoinments/MyAppoinmen";
import Profile from "../component/Profile/Profile";
import CardDetails from "../component/CardDetails/CardDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader:async () => {
                    const survicesRes = await fetch("/service.json");
                    const survicesData = await survicesRes.json();

                    const feedBackRes = await fetch("/happyclients.json");
                    const feedBackData = await feedBackRes.json();

                    return {survicesData, feedBackData};
                }
            },
            {
                path: "/allTreatments",
                element: <AllTreatments />,
                loader:() => fetch("/service.json")
            },
            {
                path: "/myAppoinments",
                element: <MyAppoinmen />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/details/:id",
                element: <CardDetails />,
                loader:async ({params}) => {
                    const detailssRes = await fetch("/service.json");
                    const detailsData = await detailssRes.json();
                    const singleData = detailsData.find(data=> data.id == params.id)
                    return singleData;
                }
            },
        ]
    }
])

export default router;