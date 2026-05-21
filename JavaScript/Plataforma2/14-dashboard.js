// ─────────────────────────────────────────────
// Dashboard de datos con async/await + Promise.all()
// ─────────────────────────────────────────────

// Función 1: obtenerClima()
// Retorna: new Promise((resolve) => { ... })
// Usa setTimeout con 300ms
// Llama a: resolve("Soleado 24°C")
// ....
function obtenerClima() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Soleado 24°C");
    }, 300);
  });
}

// Función 2: obtenerNoticias()
// Retorna: new Promise((resolve) => { ... })
// Usa setTimeout con 150ms
// Llama a: resolve("5 noticias disponibles")
// ....
function obtenerNoticias() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("5 noticias disponibles");
    }, 150);
  });
}
// Función 3: obtenerCotizacion()
// Retorna: new Promise((resolve) => { ... })
// Usa setTimeout con 200ms
// Llama a: resolve("USD 17.50")
// ....
function obtenerCotizacion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("USD 17.50");
    }, 200);
  });
}

async function cargarDashboard() {
  try {
    console.log("Cargando dashboard...");
    const [clima, noticias, cotizacion] = await Promise.all([
    obtenerClima(),
    obtenerNoticias(),
    obtenerCotizacion(),
    ]);
    console.log("🌤️ Clima: "+ clima)
    console.log("📰 Noticias: "+ noticias)
    console.log("💱 Cotización: " + cotizacion)
    console.log("✅ Dashboard cargado correctamente") 
  } catch (error) {
    console.log("Error: " + error);
  }
}


// Llama a cargarDashboard()
// ....

cargarDashboard()