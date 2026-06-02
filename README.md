# ¿Cuánto gastar?

Calculadora simple para saber cuánto hay que gastar para aprovechar al máximo un reintegro con tope.

La app permite ingresar el porcentaje de descuento y el tope de reintegro, y calcula automáticamente:

- El monto que conviene gastar para obtener el reintegro completo.
- El reintegro esperado.
- El precio final después del reintegro.

## Ejemplo

Si una promoción ofrece:

- 25% de reintegro
- Tope de reintegro de $10.000

Entonces la app calcula que hay que gastar $40.000 para obtener el reintegro completo.

## Fórmula

```txt
monto a gastar = tope de reintegro / (porcentaje de descuento / 100)
```

Ejemplo:

```txt
10000 / (25 / 100) = 40000
```

## Tecnologías

- React
- React Router
- Flowbite React
- Tailwind CSS
- React Icons

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
```

Luego abre la URL que indique la terminal, normalmente:

```txt
http://localhost:5173
```

## Uso

1. Ingresa el porcentaje de descuento de la promoción.
2. Ingresa el tope de reintegro.
3. La app muestra el monto ideal a gastar y el precio final estimado.

## Notas

La calculadora está pensada para promociones de reintegro con tope, como descuentos bancarios, billeteras virtuales o beneficios de comercios.

Los resultados son orientativos y pueden variar si la promoción aplica condiciones adicionales, redondeos, exclusiones o límites por rubro.

## Autor

Hecho con cariño por [Kathe](https://linktr.ee/kathe.systems).
