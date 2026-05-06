const cadena = "Hola Mundo";

// Valida que la entrada no esté vacía
// Si lo está, imprime "Entrada inválida" y termina
// ....
if(!isNaN(cadena)){
   console.log("Entrada inválida");
}else{
   // Declara contadores para:
   //   - vocales
   //   - consonantes mayores (m-z)
   //   - consonantes menores (a-l)
   // ....
   let vocales = 0;
   let constantes_may = 0;
   let constantes_men = 0;

   // Usa un bucle for para recorrer cada carácter de la cadena
   // Convierte cada carácter a minúscula para facilitar la comparación
   // Usa if / else if / else para clasificar cada carácter:
   //   - Si es vocal (a, e, i, o, u)        → incrementa contador de vocales
   //   - Si es consonante mayor (m, n, ... z) → incrementa consonantes mayores
   //   - Si es consonante menor (b, c, ... l) → incrementa consonantes menores
   //   - Si es espacio u otro carácter        → ignorar
   // ....
   let cadena2 = cadena.toLowerCase().split('');
   for(let i=0;i<cadena2.length;i++){
      if(cadena2[i].charCodeAt()>=97 && cadena2[i].charCodeAt()<=122){
        if(
            cadena2[i].charCodeAt()==97 ||
            cadena2[i].charCodeAt()==101 ||
            cadena2[i].charCodeAt()==105 ||
            cadena2[i].charCodeAt()==111 ||
            cadena2[i].charCodeAt()==117 
         ){
            vocales+=1;
         }else if(cadena2[i].charCodeAt()>=98 && cadena2[i].charCodeAt()>=108){
            constantes_men+=1; 
         }else{
            constantes_may+=1;
         }
      }else{
         continue;
      };
   };
   // Imprime los resultados con el formato:
   // "Vocales: X"
   // "Consonantes mayores (m-z): X"
   // "Consonantes menores (a-l): X"
   // ....
   console.log("Vocales: "+`${vocales}`);
   console.log("Constantes mayores: "+`${constantes_may}`);
   console.log("Constantes menores: "+`${constantes_may}`);
};
