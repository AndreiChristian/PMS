import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./components/calendar/Calendar";
import About from "./pages/About/About";
import Booking from "./pages/BOOKINGS/Booking";
import BookingForm from "./pages/BOOKINGS/BookingForm";
import OverView from "./pages/BOOKINGS/OverView";
import DemoIntro from "./pages/Demo/Intro";
import ExistingBookingDetail from "./pages/ExistingBookings/ExistingBookingDetail";
import ExistingBookings from "./pages/ExistingBookings/ExistingBookings";
import Home from "./pages/Home/Home";
import RateList from "./pages/Rates/RateList";
import RoomList from "./pages/Rooms/RoomList";
import RoomType from "./pages/Rooms/RoomType";
import Root from "./pages/Root";
import Schedule from "./pages/Schedule/Schedule";
import { roomArray, roomTypeArrayWithId } from "./store/Slices/room-type-slice";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "schedule",
      element: <Schedule />,
    },
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "rooms",
          element: <RoomType />,
        },
        {
          path: "rooms/:id",
          element: <RoomList />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "bookings",
          element: <Booking />,
          children: [
            { index: true, element: <OverView /> },
            { path: "forms", element: <BookingForm /> },
            {path: "existing", element: <ExistingBookings />},{
              path: "existing/:id", element: <ExistingBookingDetail />
            }
          ],
        },
        {
          path: "rates",
          element: <RateList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
