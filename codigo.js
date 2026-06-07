const contenedor = document.getElementById('contenedor');
const cantidad = 200;
const escala = 12;

function obtenerCoordenadas(t) {
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
  return { x, y };
}

for (let i = 0; i < cantidad; i++) {
  let t = (i / cantidad) * 2 * Math.PI;
  let { x, y } = obtenerCoordenadas(t);

  const corazon = document.createElement('div');
  corazon.className = 'corazon';
  corazon.innerHTML = '❤️';

  corazon.style.left = `calc(50% + ${x * escala}px)`;
  corazon.style.top = `calc(50% - ${y * escala}px)`;
  corazon.style.animationDelay = `${Math.random() * 1.5}s`;

  contenedor.appendChild(corazon);
}
