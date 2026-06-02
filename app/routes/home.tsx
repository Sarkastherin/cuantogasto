import type { Route } from "./+types/home";
import  HomePage  from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "¿Cuánto Gastar?" },
    { name: "description", content: "Calcula cuánto debes gastar para obtener el reintegro completo." },
  ];
}

export default function Home() {
  return <HomePage />;
}
