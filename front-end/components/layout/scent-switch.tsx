"use client"

import { useState } from "react"
import { Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ScentSwitch() {
  const [isOn, setIsOn] = useState(false)
  const [intensity, setIntensity] = useState([50])

  return (
    <Card className="w-full max-w-sm  text-white rounded-2xl bg-white/10 backdrop-blur-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Lavender Dreams</CardTitle>
          <CardDescription>Room Diffuser</CardDescription>
        </div>
        <Switch checked={isOn} onCheckedChange={setIsOn} aria-label="Toggle diffuser" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center py-4">
          <Wind
            className={`h-24 w-24 transition-opacity duration-300 ${isOn ? "opacity-100" : "opacity-30"}`}
            style={{
              transform: `scale(${intensity[0] / 50})`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Intensity</span>
            <Badge variant="secondary">{intensity}%</Badge>
          </div>
          <Slider
            disabled={!isOn}
            value={intensity}
            onValueChange={setIntensity}
            max={100}
            step={1}
            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            aria-label="Adjust scent intensity"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" disabled={!isOn} onClick={() => setIntensity([25])}>
            Low
          </Button>
          <Button variant="outline" className="flex-1" disabled={!isOn} onClick={() => setIntensity([50])}>
            Medium
          </Button>
          <Button variant="outline" className="flex-1" disabled={!isOn} onClick={() => setIntensity([100])}>
            High
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

