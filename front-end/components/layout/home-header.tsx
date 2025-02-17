import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import * as React from "react";

export default function HomeHeader() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="mb-6 flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
      <h1 className="text-2xl font-semibold text-white">Welcome Home, User!</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            className="w-[300px] bg-white/10 pl-10 text-white placeholder:text-gray-400"
            placeholder="Search..."
          />
        </div>
        <div className="text-right text-white">
          <div className="text-2xl">
            {date
              .toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                hourCycle: "h12",
              })
              .toUpperCase()}
          </div>
          <div className="text-sm text-gray-300">
            {date.toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
