import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Texts from "@/components/Texts";

export default function Home() {
  return (
    <main className="flex  justify-between p-24">
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
