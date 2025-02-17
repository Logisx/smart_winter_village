import { Slider } from "@/components/ui/slider";
import * as React from "react";

export default function BrightnessControl() {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
      <div className="mb-2 text-sm text-gray-300">Brightness</div>
      <div className="text-2xl font-bold text-white">52%</div>
      <Slider defaultValue={[52]} max={100} step={1} className="mt-2" />
    </div>
  );
}
