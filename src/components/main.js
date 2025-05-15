import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="bg-gradient-to-b from-dark-purple via-semi-dark-purple to-violet-500 font-mono">
      <div className="bg-[url('./images/weather.png')] h-screen bg-no-repeat bg-center">
        <div className=" h-screen flex flex-col items-center justify-end gap-3 p-10 text-3xl">
          <h1 className="text-5xl text-white font-extrabold">Weather</h1>
          <p className="text-5xl text-yellow">Forecasts</p>

          <Link to="/forecast">
            <button className="bg-yellow hover:shadow-2xl rounded-full px-8 py-2">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
