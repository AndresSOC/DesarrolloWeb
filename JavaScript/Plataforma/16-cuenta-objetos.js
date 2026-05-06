const lineas = ["Juan ABC-001 1000","depositar 500","retirar 200","retirar 2000","depositar -100"];


// Valida que la primera línea tenga exactamente 3 datos
// y que el saldo inicial sea un número válido
// Si no, imprime "Entrada inválida" y termina
// ....

if(lineas[0].split(" ").length!=3 || typeof(lineas[2])=="number"|| lineas[2]<0){
    console.log("Entrada inválida");
}else{
    // Crea el objeto "cuenta" con las siguientes propiedades:
    //   - titular      : primer dato  (string)
    //   - numeroCuenta : segundo dato (string)
    //   - saldo        : tercer dato  (number, usa Number())
    //
    // Y los siguientes métodos (usa "this" para acceder al saldo):
    //
    //   depositar(monto):
    //     - Si monto <= 0  → retorna "Monto inválido"
    //     - Si es válido   → suma monto a this.saldo
    //                      → retorna "OK - Nuevo saldo: X"
    //
    //   retirar(monto):
    //     - Si monto <= 0          → retorna "Monto inválido"
    //     - Si monto > this.saldo  → retorna "Saldo insuficiente"
    //     - Si es válido           → resta monto de this.saldo
    //                              → retorna "OK - Nuevo saldo: X"
    //
    //   obtenerInfo():
    //     - Retorna la cadena con el formato:
    //       "Titular: X\nCuenta: X\nSaldo final: X"
    // ....
    info = lineas[0].split(' ');
    const cuenta = {
        titular: String(info[0]),
        numeroCuenta: String(info[1]),
        saldo: Number(info[2]),
        depositar : function(monto){
            if(Number(monto)<=0){
                return "Monto inválido";
            }else{ 
                this.saldo += Number(monto); 
                return `OK - Nuevo saldo: ${this.saldo}`;
            };
            
        },
        retirar : function(monto){
            if(Number(monto)<=0){
                return "Monto inválido";
            }else if(Number(monto) > this.saldo){
                return "Saldo insuficiente";
            }else{
                this.saldo = this.saldo-Number(monto);
                return `OK - Nuevo saldo: ${this.saldo}`;
            };
        },
        obtenerinfo : function(){
            return `Titular: ${this.titular}\nCuenta: ${this.numeroCuenta}\nSaldo final: ${this.saldo}`;
        },
    }

    // Usa un bucle for para recorrer las operaciones (desde lineas[1])
    // Separa cada línea en operación y monto
    // Llama al método correspondiente e imprime:
    // "operacion monto: resultado"
    // ....

    for(let i =1; i<lineas.length;i++){
        operacion = lineas[i].split(' ')[0];
        monto = lineas[i].split(' ')[1];
        if (operacion === 'depositar'){
            console.log(`${operacion} ${monto}: ${cuenta.depositar(monto)}`)
        }else if(operacion==='retirar'){
            console.log(`${operacion} ${monto}: ${cuenta.retirar(monto)}`)
        };
    }

    // Imprime el separador "---"
    // Llama a obtenerInfo() e imprime el resultado
    // ....
    console.log("---")
    console.log(cuenta.obtenerinfo());
};

