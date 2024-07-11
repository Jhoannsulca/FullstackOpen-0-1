import { reduce } from "react";

export const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);
  return (
    <div>
      <b>Total: {total} ejercices</b>
    </div>
  )
}
