import { Button } from "@/components/ui/button";
import { BarChart2, Home, Info, Phone, User2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";

export default function ScentSwitch() {
  return (
    <nav className="flex w-16 flex-col items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
      <Button variant="ghost" size="icon" className="text-white">
        <Home className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <BarChart2 className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <User2 className="h-6 w-6" />
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Info className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>General Information & Rules</DialogTitle>
            <DialogDescription>
              Welcome! Here are some important guidelines to ensure a pleasant
              experience.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>1. Please maintain quiet hours between 10 PM and 7 AM</p>
            <p>2. Recycling is encouraged - bins are color coded</p>
            <p>3. For emergencies, contact building security at 123-6666</p>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Phone className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Maintenance Personnel Contacts</DialogTitle>
            <DialogDescription>
              Here are the contact details for building maintenance staff.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>General Maintenance: Place Holder - (555) 123-4567</p>{" "}
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
