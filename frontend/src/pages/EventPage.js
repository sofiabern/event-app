import { useParams } from "react-router-dom";
const EventPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventPage</h1>
      <p>Event ID: {params.id}</p>
    </>
  );
};

export default EventPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
