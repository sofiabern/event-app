import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventPage = () => {
  const data = useRouteLoaderData("event");

  return <EventItem event={data.event} />;
};

export default EventPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const action = async ({ params, request}) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event" },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
};
