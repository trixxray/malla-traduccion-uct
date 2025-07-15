
let creditosAprobados = 0;
const estadoAsignaturas = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>Semestre ${i}</h2>`;

    malla
      .filter(asig => asig.semestre === i)
      .forEach(asig => {
        const div = document.createElement("div");
        div.className = "asignatura bloqueada";
        div.textContent = `${asig.nombre} (${asig.creditos} cr.)`;
        div.dataset.codigo = asig.codigo;
        div.onclick = () => toggleAsignatura(asig);
        columna.appendChild(div);

        estadoAsignaturas[asig.codigo] = "bloqueada";
      });

    contenedor.appendChild(columna);
  }

  actualizarMalla();
}

function toggleAsignatura(asig) {
  const estado = estadoAsignaturas[asig.codigo];
  if (estado === "desbloqueada") {
    estadoAsignaturas[asig.codigo] = "aprobada";
    creditosAprobados += asig.creditos;
  } else if (estado === "aprobada") {
    estadoAsignaturas[asig.codigo] = "desbloqueada";
    creditosAprobados -= asig.creditos;
  } else {
    return;
  }

  actualizarMalla();
}

function actualizarMalla() {
  let cambios;
  do {
    cambios = false;

    for (const asig of malla) {
      const estado = estadoAsignaturas[asig.codigo];

      if (estado === "aprobada") continue;

      const desbloqueable = asig.prerreq.every(
        req => estadoAsignaturas[req] === "aprobada"
      );

      if (desbloqueable && estado !== "desbloqueada") {
        estadoAsignaturas[asig.codigo] = "desbloqueada";
        cambios = true;
      }

      if (!desbloqueable && estado !== "bloqueada" && estado !== "aprobada") {
        estadoAsignaturas[asig.codigo] = "bloqueada";
        cambios = true;
      }
    }
  } while (cambios);

  document.querySelectorAll(".asignatura").forEach(div => {
    const codigo = div.dataset.codigo;
    const estado = estadoAsignaturas[codigo];

    div.className = "asignatura";
    if (estado === "bloqueada") div.classList.add("bloqueada");
    if (estado === "aprobada") div.classList.add("aprobada");
  });

  document.getElementById("creditosAprobados").textContent = creditosAprobados;
}

function reiniciarMalla() {
  creditosAprobados = 0;
  Object.keys(estadoAsignaturas).forEach(codigo => {
    estadoAsignaturas[codigo] = "bloqueada";
  });
  crearMalla();
}

crearMalla();
