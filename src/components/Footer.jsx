import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] flex items-center justify-center text-white ">
        

        <div  className="text-center text-white/90">
          <p className="flex items-center justify-center gap-1">
            Customized with <Heart className="h-4 w-4 fill-current" /> by Mahak
            Kankaria
          </p>
        </div>
    </footer>
  );
}
