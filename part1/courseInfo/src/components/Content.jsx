export const Content = ({ parts }) => {
  return (
    <>
    {
      parts.map(part => (
        <Part key={part.id} part={part}/>
      ))
    }
    </>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
