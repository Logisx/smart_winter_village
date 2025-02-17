"use client";

import * as React from "react";
import {
  Plus,
  Search,
  Music,
  Cherry,
  Guitar,
  ChevronDown,
  Repeat2,
  Play,
  SkipBack,
  Volume2,
  SkipForward,
  PartyPopper,
  Laugh,
} from "lucide-react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

import ScentSwitch from "@/components/layout/scent-switch";
import HomeSidebar from "@/components/layout/home-sidebar";
import WeatherWidget from "@/components/layout/weather-widget";
import BrightnessControl from "@/components/layout/brightness-control";
import HomeHeader from "@/components/layout/home-header";

export default function SmartRoomDashboard() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <HomeHeader />

          <div className="flex gap-4">
            {/* Sidebar */}
            <HomeSidebar />

            <div className="flex-1 space-y-4">
              {/* Room Tabs */}
              <Tabs defaultValue="living-room" className="w-fit">
                <TabsList className="bg-white/10 backdrop-blur-lg">
                  <TabsTrigger value="Room1" className="text-white">
                    Room1
                  </TabsTrigger>
                  <TabsTrigger value="Room2" className="text-white">
                    Room2
                  </TabsTrigger>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </TabsList>
              </Tabs>

              <div className="grid grid-cols-12 gap-4">
                {/* Left Column */}
                <div className="col-span-4 space-y-4">
                  {/* Weather Widget */}
                  <WeatherWidget />
                  {/* Brightness Control */}
                  <BrightnessControl />
                </div>

                {/* Middle Column*/}
                <div className="col-span-4 space-y-4">
                  <Card className=" text-white rounded-2xl bg-white/10 backdrop-blur-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-8">
                        <div className="text-2xl">Vibe Settings</div>
                        <div className="flex items-center gap-2">
                          Thermostat
                          <Switch checked={true} />
                        </div>
                      </div>
                      {/* Thermostat Panel */}
                      <div className="relative aspect-square max-w-[260px] mx-auto mb-4">
                        <div className="absolute inset-4 rounded-full border-4 border-white/20" />
                        <div
                          className="absolute inset-4 rounded-full border-4 border-white"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <div className="text-6xl font-semibold">64°</div>
                          <div className="text-gray-400">( °Fahrenheit )</div>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute left-1/2 -translate-x-1/2 bottom-4"
                        >
                          <ChevronDown className="h-6 w-6" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute left-1/2 -translate-x-1/2 top-4"
                        >
                          <ChevronDown className="h-6 w-6 rotate-180" />
                        </Button>
                      </div>

                      <div className="space-y-8 mb-8">
                        <div className="space-y-4">
                          <label className="text-sm text-gray-300">
                            Ambiance Level
                          </label>
                          <div className="flex items-center gap-4">
                            <Music className="h-5 w-5" />
                            <Slider
                              defaultValue={[66]}
                              max={100}
                              step={1}
                              className="flex-1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-8">
                        {[
                          { icon: PartyPopper, label: "Party" },
                          { icon: Cherry, label: "Sweet" },
                          { icon: Laugh, label: "Cozy" },
                          { icon: Guitar, label: "Custom", active: true },
                        ].map((button, i) => (
                          <Button
                            key={i}
                            variant="ghost"
                            className={`flex flex-col gap-2 h-auto py-4 ${button.active ? "bg-blue-100/10" : ""}`}
                          >
                            <button.icon className="h-5 w-5" />
                            <span className="text-xs">{button.label}</span>
                          </Button>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div>Music Player</div>
                          <div className="font-medium">Album</div>
                        </div>
                        <div className="h-1 bg-gray-700 rounded-full">
                          <div className="h-full w-1/3 bg-white rounded-full" />
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <div>0:35</div>
                          <div>2:30</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Button size="icon" variant="ghost">
                            <Repeat2 className="h-4 w-4" />
                          </Button>
                          <div className="flex items-center gap-4">
                            <Button size="icon" variant="ghost">
                              <SkipBack className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              className="h-10 w-10 rounded-full bg-white text-black"
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <SkipForward className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button size="icon" variant="ghost">
                            <Volume2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Device Controls */}
                <div className="col-span-4 space-y-4">
                  <ScentSwitch />
                  <div className="grid grid-cols-2 gap-4">
                    {/* LED Lamp */}
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
                      <div className="mb-2 flex justify-between">
                        <div>
                          <div className="text-lg text-white">LED lamp</div>
                          <div className="text-sm text-gray-300">Phillips</div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
    </AuroraBackground>
  );
}
