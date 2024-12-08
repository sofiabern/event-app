import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsRootLayout from "./pages/EventsRootLayout";
import EventsPage, {loader as eventsLoader} from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader},
          { path: ":id", element: <EventPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
