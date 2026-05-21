const partes = ["skills", "Ana", "Vue"];
const operacion = partes[0];

// Equipo base — NO modificar
const equipo = [
  { id: 1, nombre: "Ana", rol: "Dev", skills: ["JS", "React"] },
  { id: 2, nombre: "Luis", rol: "Design", skills: ["CSS", "Figma"] },
  { id: 3, nombre: "María", rol: "Dev", skills: ["Node", "MongoDB"] },
];

// OPERACIÓN "info"
// Entrada: "info NombreMiembro"
// Usa find() para localizar al miembro (insensible a mayúsculas)
// Usa DESESTRUCTURACIÓN { } para extraer nombre, rol y skills
// Si existe  →
//   "Nombre: nombre"
//   "Rol: rol"
//   "Skills: skill1, skill2"   (usa join(', '))
// Si no existe → "Miembro no encontrado: nombre"
if (operacion === "info") {
  const nombre = partes[1];
  // ....

  const miembro = equipo.find(
    (v) => v.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  if (miembro) {
    const { nombre, rol, skills } = miembro;
    console.log("Nombre: " + miembro.nombre);
    console.log("Rol: " + miembro.rol);
    console.log("Skills: " + miembro.skills.join(","));
  } else {
    console.log("Miembro no encontrado: " + nombre);
  }

  // OPERACIÓN "agregar"
  // Entrada: "agregar NombreMiembro Rol"
  // Crea un nuevo objeto miembro con id, nombre, rol y skills: []
  // Usa spread [...equipo, nuevoMiembro] para generar el equipo actualizado
  // Imprime:
  //   "Equipo actualizado: nombre1, nombre2, ..., nuevoNombre"  (usa map + join)
  //   "Nuevo miembro: nombre (rol)"
} else if (operacion === "agregar") {
  const nombre = partes[1];
  const rol = partes[2];
  // ....

  const nuevoMiembro = {
    id: equipo.length + 1,
    nombre,
    rol,
    skills: [],
  };

  const equipoActualizado = [...equipo, nuevoMiembro];

  console.log(
    `Equipo actulizado: ${equipoActualizado.map((m) => m.nombre).join(", ")}`,
  );
  console.log(`Nuevo miembro: ${nuevoMiembro.nombre} (${nuevoMiembro.rol})`);

  // OPERACIÓN "skills"
  // Entrada: "skills NombreMiembro NuevoSkill"
  // Usa find() para localizar al miembro (insensible a mayúsculas)
  // Usa spread [...miembro.skills, nuevoSkill] para agregar el skill
  // Si existe  → "Skills de nombre actualizados: skill1, skill2, nuevoSkill"
  // Si no existe → "Miembro no encontrado: nombre"
} else if (operacion === "skills") {
  const nombre = partes[1];
  const nuevoSkill = partes[2];
  // ....

  const miembro = equipo.find(
    (v) => v.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  if (miembro) {
    const skillsActualizadas = [...miembro.skills, nuevoSkill];
    console.log(
      "Skills de "+nombre+" actualizados: " + skillsActualizadas.join(", "),
    );
  } else {
    console.log("Miembro no encontrado: "+nombre);
  }

  // Si la operación no es ninguna de las anteriores:
} else {
  console.log("Operación no válida");
}
