import { lista_personajes } from "./db.js";
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

//1. funcion para agregar una nueva clave al objeto, la clave se debe llamar iniciales
//2. se recibe como parametro al heroe
//3 retorna el valor obtenido de la funcion extraer_iniciales

const definir_iniciales_nombre = (heroe) => {
  //hacer las validaciones
  if (typeof heroe === "object") {
    if (Object.keys(heroe).includes("nombre")) {
      heroe["iniciales"] = extraer_iniciales(heroe.nombre);
      console.log(heroe);
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//console.log(extraer_iniciales("Howard the Duck"));
definir_iniciales_nombre(lista_personajes[0]);
