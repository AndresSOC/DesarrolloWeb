const partes = ["Ana",28,"Programadora","Monterrey"];

// Valida que haya exactamente 4 datos y que la edad sea un número
// Si no, imprime "Entrada inválida" y termina
// ....

if(partes.length!=4 || typeof(partes[1])!=="number" ){
   console.log("Entrada inválida");
}else{

   // Crea un objeto llamado "persona" con las siguientes propiedades:
   //   - nombre    : el primer dato  (string)
   //   - edad      : el segundo dato (number, usa Number())
   //   - profesion : el tercer dato  (string)
   //   - ciudad    : el cuarto dato  (string)
   //
   // Y el siguiente método:
   //   - presentarse() : debe RETORNAR la cadena con el formato:
   //     "Hola, me llamo X, tengo X años, soy X y vivo en X."
   //     Usa "this" para acceder a las propiedades del objeto
   //
   // Ejemplo:
   // const persona = {
   //     nombre: ...,
   //     edad: ...,
   //     ...
   //     presentarse: function() {
   //         return "Hola, me llamo " + this.nombre + ...;
   //     }
   // };
   // ....

    const persona ={
      nombre: String(partes[0]),
      edad: Number(partes[1]),
      profesion: String(partes[2]),
      ciudad: String(partes[3]),
      presentarse: function(){
         return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años, soy ${this.profesion} y vivo en ${this.ciudad}.`;
      }
   }

   // Llama al método presentarse() e imprime el resultado
   // ....
   console.log(persona.presentarse())
};
