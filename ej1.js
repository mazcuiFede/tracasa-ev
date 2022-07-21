const personas = [
  {
    id: 1,
    nombre: "Persona 1",
    edad: 29,
    habilidades: ["Programador front-end", "Diseñador", "Gestor"],
  },
  {
    id: 2,
    nombre: "Persona 2",
    edad: 30,
    habilidades: ["Back-end", "Diseñador", "Gestor"],
  },
  {
    id: 3,
    nombre: "Persona 3",
    edad: 31,
    habilidades: ["Programador front-end", "UX", "Marketing"],
  },
  {
    id: 4,
    nombre: "Persona 4",
    edad: 32,
    habilidades: ["Programador front-end", "Diseñador", "Gestor"],
  },
]

const olderThan = (age) => {
  return personas.filter((x) => x.edad > age)
}

const habilities = () => {
  var result = personas.map((x) => x.habilidades).flat()
  return [...new Set(result)]
}

const averageAge = () => {
  const result = personas.map((x) => x.edad)
  const sum = result.reduce((a, b) => a + b, 0)

  return result.length === 0 ? 0 : sum / result.length
}

/* TEST AREA */

//console.log(olderThan(30))
//console.log(habilities())
//console.log(averageAge())
