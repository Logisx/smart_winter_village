import { Cloud, CloudRain, Sun, Wind } from "lucide-react";
import * as React from "react";

export default function WeatherWidget() {
  return (
    <>
      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="h-12 w-12 text-yellow-400">
              {/* Weather */}
              <div className="relative">
                <div className="absolute h-8 w-8 rounded-full bg-yellow-400" />
                <div className="absolute left-4 top-4 h-6 w-8 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Sunny Day</div>
            <div className="text-3xl font-bold text-white">21°C</div>
            <div className="text-sm text-gray-300">Temperature Outside</div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
        <div className="mb-2 text-sm text-gray-300">Weathter Forecast</div>
        <div className="grid-cols-5 gap-1 grid">
          {[
            {
              day: "Today",
              icon: Sun,
              temp: "-12°",
              condition: "Sunny",
            },
            {
              day: "Tue",
              icon: CloudRain,
              temp: "10°",
              condition: "Rain",
            },
            {
              day: "Wed",
              icon: Cloud,
              temp: "10°",
              condition: "Cloudy",
            },
            {
              day: "Thu",
              icon: Sun,
              temp: "15°",
              condition: "Sunny",
            },
            {
              day: "Fri",
              icon: Wind,
              temp: "11°",
              condition: "Windy",
            },
          ].map((weather, i) => (
            <div key={i} className="text-center p-4 rounded-lg bg-white/70">
              <div className="text-sm font-medium mb-2">{weather.day}</div>
              <weather.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-xl font-semibold mb-1">{weather.temp}</div>
              <div className="text-sm text-gray-600">{weather.condition}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
