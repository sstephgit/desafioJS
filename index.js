// 1. funcion para devolver un nuevo string con las iniciales del personaje seguidos por un punto
//2. recibe como parámetro nombre_heroe (un string con el nombre del personaje)
//3. retorna un string con las iniciales



const extraer_iniciales = (nombre_heroe) => {
  if (nombre_heroe.length == 0) {
    return "N/A";
  } else {
    const nombres_sin_guion = nombre_heroe.replaceAll("-", " ");
    // console.log(nombres_sin_guion);

    const separador_espacio = nombres_sin_guion.split(" ");
    // console.log(separador_espacio);

    const arr_nombres_validados = separador_espacio.filter(
      (palabra) => palabra != "the"
    );
    //console.log(arr_nombres_validados);

    const arr_iniciales = arr_nombres_validados
      .map((nombre) => nombre[0].concat("."))
      .toString();
    const iniciales_nombres = arr_iniciales.replaceAll(",", "");
    return iniciales_nombres;
  }
};

console.log(extraer_iniciales("Howard the Duck"));
