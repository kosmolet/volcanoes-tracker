import { useState, useEffect } from "react";
import Map from "./components/Map";
import Spinner from "./components/Spinner";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="App">
      <h1>Volcano tracker</h1>

      {!loading ? <Map eventData={eventData} /> : <Spinner />}
    </div>
  );
}

export default App;
