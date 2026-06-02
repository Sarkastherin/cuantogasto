import type { Route } from "./+types/home";
import  HomePage  from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "¿Cuánto Gastar? — Calculadora de Reintegro" },
    {
      name: "description",
      content:
        "Calculá en segundos cuánto tenés que gastar para aprovechar el reintegro completo de tu tarjeta. Ingresá el porcentaje de descuento y el tope máximo, y listo.",
    },
    {
      name: "keywords",
      content:
        "reintegro, calculadora reintegro, cuánto gastar, descuento tarjeta, tope reintegro, ahorro Argentina",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
