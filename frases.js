const frases = [
    "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan - Elon Musk",
    "No cuentes los días, haz que los días cuenten - Muhammad Ali",
    "Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta - Henry Ford",
    "Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme - Abraham Lincoln",
    "Del sufrimiento emergieron las almas más fuertes, los caracteres sólidos tienen cicatrices - Khalil Gibran",
    "El éxito no es definitivo, el fracaso no es fatídico. Lo que cuenta es el valor para continuar - Winston Churchill",
    "Sal de tu zona de confort. Solo puedes crecer si estás dispuesto a sentirte raro e incómodo cuando intentas algo nuevo - Brian Tracy",
    "¿Por qué contentarnos con vivir a rastras cuando sentimos el anhelo de volar? - Hellen Keller",
    "Cuando dejo ir lo que soy, me convierto en lo que debería ser - Lao Tzu",
    "Nunca es demasiado tarde para ser lo que podrías haber sido - George Eliot"
  ];

  function generarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }

  function MostrarFrase() {
    const frase = generarFrase();
    document.getElementById("frase").innerHTML = generarFrase();

    /*const fraseElemento = document.getElementById("frase");
    fraseElemento.textContent = frase;*/
  }

  MostrarFrase();