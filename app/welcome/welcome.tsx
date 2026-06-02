import { Card, Label, TextInput, DarkThemeToggle } from "flowbite-react";
import { useMemo, useState } from "react";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { NavLink } from "react-router";

export default function HomePage() {
  const [discount, setDiscount] = useState("");
  const [refund, setRefund] = useState("");

  const result = useMemo(() => {
    const d = Number(discount.replace(",", "."));
    const r = Number(refund.replace(",", "."));

    if (!d || !r) return null;

    const spend = r / (d / 100);

    return {
      spend,
      refund: r,
      finalPrice: spend - r,
    };
  }, [discount, refund]);

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-950">
      <DarkThemeToggle />
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center justify-center px-4 py-3 sm:py-6">
        <Card className="w-full [&>div]:gap-3 [&>div]:p-4 sm:[&>div]:gap-5 sm:[&>div]:p-6">
          <div className="text-center">
            <div className="mb-2 flex justify-center sm:mb-3">
              <div className="rounded-full bg-indigo-100 text-indigo-700 p-2.5 dark:bg-indigo-600/30 dark:text-indigo-200 sm:p-3">
                <HiOutlineReceiptRefund size={28} className="sm:size-8" />
              </div>
            </div>

            <h1 className="text-2xl font-bold leading-tight sm:text-3xl dark:text-white">
              ¿Cuánto gastar?
            </h1>

            <p className="mt-1 leading-snug text-gray-500 sm:mt-2 sm:text-base text-xs dark:text-gray-400">
              Calcula cuánto debes gastar para obtener el reintegro completo.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="discount">Porcentaje de descuento (%)</Label>

              <TextInput
                id="discount"
                type="text"
                inputMode="decimal"
                placeholder="25"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="refund">Tope de reintegro ($)</Label>

              <TextInput
                id="refund"
                type="text"
                inputMode="decimal"
                placeholder="10000"
                value={refund}
                onChange={(e) => setRefund(e.target.value)}
              />
            </div>
          </div>

          {result && (
            <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900/60 dark:bg-indigo-950/30 sm:p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300 sm:text-sm">
                  Debes gastar hasta
                </p>

                <p className="text-3xl font-bold leading-tight text-indigo-700 dark:text-indigo-200">
                  ${result.spend.toLocaleString("es-AR")}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-md bg-white/70 p-3 dark:bg-gray-900/70 space-y-1">
                  <p className="text-xs text-emerald-600 dark:text-emerald-300 sm:text-sm">
                    Reintegro
                  </p>

                  <p className="font-semibold leading-tight text-emerald-700 dark:text-emerald-200">
                    ${result.refund.toLocaleString("es-AR")}
                  </p>
                </div>

                <div className="rounded-md bg-white/70 p-3 dark:bg-gray-900/70 space-y-1">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Pagarás solo
                  </p>

                  <p className="font-semibold leading-tight text-gray-800 dark:text-gray-100">
                    ${result.finalPrice.toLocaleString("es-AR")}
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="text-center text-xs leading-snug text-gray-400">
            Hecho para quienes persiguen descuentos como deporte olímpico.
          </p>
        </Card>

        <span className="mt-3 text-center text-xs text-gray-400">
          Hecho con ❤️ por{" "}
          <NavLink
            className="font-medium text-blue-600"
            to="https://linktr.ee/kathe.systems"
          >
            Kathe
          </NavLink>
          .
        </span>
      </div>
    </div>
  );
}
