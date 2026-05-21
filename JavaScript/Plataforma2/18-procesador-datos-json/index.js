import { readFile, writeFile } from "fs/promises";
import { json } from "stream/consumers";

const partes = [];
const operacion = partes[0];

// Usa try/catch para manejar errores de lectura/escritura
try {
  // Usa await + readFile para leer './tareas.json' con codificación 'utf8'
  // Guarda el resultado en: texto
  // ....
  const texto = await readFile("./tareas.json", "utf-8");

  // Usa JSON.parse() para convertir el texto en objeto
  // Guarda el resultado en: datos
  // Extrae el arreglo de tareas: const tareas = datos.tareas;
  // ....
  const datos = JSON.parse(texto);
  const tareas = datos.tareas;

  // OPERACIÓN "listar"
  // Recorre las tareas e imprime cada una con el formato:
  // "id. [x] titulo"  si está completada
  // "id. [ ] titulo"  si no está completada
  if (operacion === "listar") {
    // ....
    tareas.forEach((v) => {
      const estado = v.completada ? "[x]" : "[ ]";
      console.log(`${v.id}. ${estado} ${v.titulo}`);
    });

    // OPERACIÓN "completar"
    // Entrada: "completar id"
    // Busca la tarea con ese id usando find()
    // Si no existe → "Tarea no encontrada: id"
    // Si existe:
    //   - Cambia completada a true
    //   - Usa await + writeFile para guardar los cambios en './tareas.json'
    //     con JSON.stringify(datos, null, 2)
    //   - Imprime: "Tarea completada: titulo"
  } else if (operacion === "completar") {
    const id = Number(partes[1]);
    // ....
    const tarea = tareas.find((v) => v.id === id);
    if (!tarea) {
      console.log("Tarea no encontrada: " + id);
    } else {
      tarea.completada = true;
      const guardar = await writeFile(
        "./tareas.json",
        JSON.stringify(datos, null, 2),
      );
      console.log("tarea completada: " + tarea.titulo);
    }

    // OPERACIÓN "agregar"
    // Entrada: "agregar titulo de la tarea"
    // El título es todo lo que viene después de "agregar" (usa slice + join)
    // Crea una nueva tarea con el siguiente id, el título y completada: false
    // Usa spread [...tareas, nuevaTarea] para agregar al arreglo
    // Usa await + writeFile para guardar los cambios
    // Imprime: "Tarea agregada: titulo (id: nuevaId)"
  } else if (operacion === "agregar") {
    const titulo = partes.slice(1).join(" ");
    // ....

    const nuevaTarea = {
      id: tareas.length + 1,
      titulo,
      completada: false,
    };

    datos.tareas = [...tareas, nuevaTarea];

    const guardar = await writeFile(
      "./tareas.json",
      JSON.stringify(datos, null, 2),
    );

    console.log("Tarea agregada: "+nuevaTarea.titulo+" (id: "+nuevaTarea.id+ ")")
  } else {
    console.log("Operación no válida");
  }
} catch (e) {
  console.log("Error: " + e.message);
}
