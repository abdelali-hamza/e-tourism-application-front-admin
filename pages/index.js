import Image from "next/image";
import { Inter } from "next/font/google";
import bg from "../public/bg.png";
import Signin from "@/Components/Signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <Signin />
    </div>
  );
}
