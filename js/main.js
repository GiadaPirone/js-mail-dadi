//abbiamo lista della mail che possono accedere.
let mail = ["web.developer@gmail.com", "studente.boolean@gmail.com", "giada.pirone@gmail.com"];
//stampiano in console le mail che possono accedere
console.log("gli utendi che possono accedere sono:", mail);

//finestra che chiede all'utente di inserire la sua mail
let tuaMail = prompt("Inserisci qui la tua mail");
//stampiamo in console la mail nel nuovo utente
console.log("mail del nuovo utente:", tuaMail);

for ( let c = 0; c < 3; c++) {

    var mailCorrente = mail[c];

    if(tuaMail == mailCorrente){
        console.log("la tua mail è giusta")
    } 
}

if(tuaMail != mailCorrente){
    console.log("ma tua mail NON è valida");
}




