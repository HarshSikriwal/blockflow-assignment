import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Texts from "@/components/Texts";
import Image from "next/image";
import lightCircle from "../public/light mode circle.png";
import Circle from "@/components/Circle";

export default function Home() {
  return (
    <main className="flex  justify-between p-24 ">
      <div className="flex flex-col gap-4">
        <Texts />
        <Button />
      </div>
      <div>
        <Logo />
      </div>
    </main>
  );
}
