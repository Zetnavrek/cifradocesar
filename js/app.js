var asking = ParseInt(prompt(" Por favor, introduce el número de la opción deseada.¿Qué deseas hacer? 1.cifrar  2.descifrar 3. Ninguna, gracias");
 if(asking === 1){
   var message = prompt('Ingresa una frase sin espacios');
   fuction cipher(phrase, n){
     var str = '';
     for(var i = 0; i < phrase.length; i++);
     var ascciNumber = phrase.charCodeAt(i);
     var phraseMay = (ascciNumber -65 + n) %26 +65;
     var phraseMin = (ascciNumber -97 + n) %26 =97;

     if(ascciNumber >= 65 && ascciNumber <=90){
       str += String.fromCharCode(phraseMay);

     }else if(ascciNumber >= 97 && ascciNumber <= 122){
       str += String.fromCharCode(phraseMin);

     }else{
       alert('La frase no debe tener espacios ni numeros.');
     }
   }
return str;
 }
 cipher (message, 34);
}else if (asking === 2){
   var message2 = prompt("Ingresa una frase sin espacios para descifrar");
   function decipher(frase, n){
     var str = "";
     for(var i = 0; i < frase.length; i++){
       var ascciNumber = frase.charCodeAt(i);
       var fraseMay = (((ascciNumber +65 - n) %26) +65);
       var fraseMin = (((ascciNumber +85 - n) %26) + 97);
       if(ascciNumber >= 65 && ascciNumber <= 90){
         str += String.fromCharCode(fraseMay);
       }else if(ascciNumber >= 97 && ascciNumber <= 122){
         str += String.fromCharCode(fraseMin);
       }else{
         alert("Ingresa una frase sin espacios y numeros");
       }
     }
     return str;
   }
   decipher(message2, 34);
   }else{
     alert("Parece que hoy no jugaremos. Bien. Hasta pronto!");
   }
  }
}
