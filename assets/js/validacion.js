export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.classList.remove("formcontato__input--invalid");
    input.parentElement.querySelector(".leyenda").innerHTML = " ";
  } else {
    input.classList.add("formcontato__input--invalid");
    input.parentElement.querySelector(".leyenda").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = ["customError", "valueMissing", "typeMismatch"];

const mensajesDeError = {
  nombre: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "El nombre no puede tener más de 50 caracteres",
  },
  email: {
    valueMissing: "Este campo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "El asunto no puede tener más de 50 caracteres",
  },
  textarea: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "El mensaje no puede tener más de 300 caracteres",
  },
};

const validadores = {
  nombre: (input) => validarNombre(input),
  asunto: (input) => validarNombre(input),
  /* textarea: (input) => validarMensaje(input), */
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = " ";

  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}

function validarNombre(input) {
  const name = input.value;

  if (name.length > 50) {
    input.setCustomValidity("El nombre no puede tener más de 50 caracteres");
  } else {
    input.setCustomValidity("");
  }
}

function validarMensaje(input) {
  const mensaje = input.value;

  console.log(mensaje.length);

  if (mensaje.length > 300) {
    input.setCustomValidity("El mensaje no puede tener más de 300 caracteres");
  } else {
    input.setCustomValidity("");
  }
}
