import React from "react"

export const ej3 = ({ personas }) => {
  return personas.map((persona) => {
    return (
      <>
        <h1>
          {persona.name} ({persona.edad} años)
        </h1>
        <ul>
          {persona.habilidades.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </>
    )
  })
}
