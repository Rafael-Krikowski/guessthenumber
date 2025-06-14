import './TableGuesses.css'

const TableGuesses = ({guesses}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Algarismos corretos</th>
                    <th>Posições corretas</th>
                </tr>
            </thead>

            <tbody>
                {guesses.map((g, i) => (
                    <tr key={i}>
                        <td>{g.guess}</td>
                        <td>{g.existence}</td>
                        <td>{g.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableGuesses