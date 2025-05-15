// import { useEffect, useState } from "react";

// export default function Forecast() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchWeather() {
//       try {
//         setLoading(true);
//         setError(null);

//         const apiKey = "4c22f610c9f1495c2f7c59088d6f7bfd";
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//         );

//         // if (!response.ok) {
//         //   throw new Error("City not found");
//         // }

//         const data = await response.json();
//         setData(data);
//         console.log(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchWeather();
//   }, [city]);

//   if (loading) return <p>Loading Weather...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <input
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//       />
//       {/* <h2>{data.name} Weather Forecast</h2>
//       <p>Current Temperature: {data.main.temp}°C</p>
//       <p>Condition: {data.weather[0].description}</p> */}
//     </div>
//   );
// }

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faTemperatureHalf,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function Forecast() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError(null);

      const apiKey = "4c22f610c9f1495c2f7c59088d6f7bfd";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (err) {
      setData(null); // ⬅️ Clear previous data if error occurs
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center m-5 p-4 font-serif text-white ">
      <h1 className="text-2xl font-semibold ">Current Weather</h1>
      <input
        className=" border-2 border-amber-400 rounded-lg p-2 text-gray-800 placeholder-gray-500 capitalize font-semibold"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchWeather();
          }
        }}
        placeholder="Enter city"
      />
      <button
        className="bg-amber-200 border-2 border-amber-400 rounded-lg p-1.5 m-2 font-semibold text-black"
        onClick={fetchWeather}
      >
        Get Forecast
      </button>

      {loading && <p>Loading Weather...</p>}
      {error && (
        <p className="bg-red-500 max-w-60 mx-auto rounded-lg">Error: {error}</p>
      )}

      {data && (
        <div className="p-8 m-8 text-center max-w-md mx-auto rounded-lg shadow-xl space-y-4 text-lg">
          <h2 className="font-bold">{data.name} Weather Forecast</h2>

          <div className="flex items-center justify-center gap-2 ">
            <FontAwesomeIcon
              className="text-blue-500 text-2xl"
              icon={faTemperatureHalf}
            />
            <p>Temp: {data.main.temp}°C</p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon className="text-pink-300 text-2xl" icon={faSmog} />
            <p className="capitalize">{data.weather[0].description}</p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon className="text-yellow text-2xl" icon={faCloud} />
            <p>{data.weather[0].main}</p>
            <img
              className="w-16 h-16"
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
          </div>
        </div>
      )}
    </div>
  );
}
