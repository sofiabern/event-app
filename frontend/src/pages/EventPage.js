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


