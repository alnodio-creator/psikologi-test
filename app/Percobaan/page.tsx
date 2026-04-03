"use client";

import { TestLanding } from "@/components/test-landing";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



const Button1 = (name: {props: string}) => {
  const Belajar = {nama : 'Alnodio'}
  const {nama} = Belajar
  return(
    <Button>
      {name.props } {Belajar.nama} {nama}
    </Button>
  )
}


const Button2 = () => {
  const name = "Tes2"
  return(
    <Button>
      {name} name
    </Button>
  )
}

export default function Page() {
  const router = useRouter();

  const HandleDemografi = () => {
    router.push("/Demografi");
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      <TestLanding onStart={HandleDemografi} />
      <Button1 props="Tes" />
      <Button2  />
    </main>
  );
}
