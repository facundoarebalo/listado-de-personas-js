const personas = [
  new Persona("Rodrigo", "Perez"),
  new Persona("Juan", "Perez"),
];

const mostrarPersonas = () => {
  let texto = "";
  personas.forEach((persona) => {
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  });
  document.getElementById("personas").innerHTML = texto;
};

const agregarPersona = () => {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    const personaExistente = personas.find(
      (p) => p.nombre === persona.nombre && p.apellido === persona.apellido
    );
    if (personaExistente) {
      alert("La persona que estas intentando agregar ya existe en la lista.");
      return;
    }
    personas.push(persona);
    mostrarPersonas();
  } else {
    alert("Debe ingresar un nombre y apellido");
  }
  nombre.value = "";
  apellido.value = "";
};
