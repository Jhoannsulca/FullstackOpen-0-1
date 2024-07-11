export const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return(
      <div>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Stadistica</th>
                <th scope="col">Valor</th>
                </tr>
            </thead>
        </table>

        <StatisticLine text="Good: " value ={good} />
        <StatisticLine text="Neutral: " value ={neutral} />
        <StatisticLine text="Bad: " value ={bad} />
        <StatisticLine text="All: " value ={all} />
        <StatisticLine text="Average: " value ={average} />
        <StatisticLine text="Positive: " value ={positive} />

      </div>
    )
  }
  

export const StatisticLine = ({ text, value }) => {
  return (
    <table className="table table-striped">
        <tbody>
            <tr>
            <td>{text}</td>
            <td>{value}</td>
            </tr>
        </tbody>
    </table>
  )
}

