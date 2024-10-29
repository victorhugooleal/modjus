import Link from 'next/link'

const tableSpecs = (pathname: string, onSelecionado: (s: string) => {}) => {
    return {
        Pessoas: {
            columns: [
                { header: 'Matrícula', accessorKey: 'official_at', enableSorting: true, style: { textAlign: "center", width: "15%" }, cell: (data: { row: { original: { sigla: string } } }) => <a href="#" onClick={() => onSelecionado(data.row.original.sigla)}>{data.row.original.sigla}</a> },
                { header: 'Nome', accessorKey: 'nome', enableSorting: true },
            ]
        },
    }
}

export default tableSpecs



// thead: () => {
//     return (<tr>
//         <th>Identificador</th>
//         <th>Nome</th>
//         <th style={{ textAlign: 'right' }}>Versões</th>
//         <th style={{ textAlign: 'center' }}>Início</th>
//         <th style={{ textAlign: 'center' }}>Término</th>
//     </tr>)
// },
// tr: record => (<tr key={record.identifier} >
//     <td><a href={`/prompts/${record.identifier}`}>{record.identifier}</a><a href={`/record/${record.id}`}></a></td>
//     <td style={{ wordBreak: 'break-all' }}>{record.name}</td>
//     <td style={{ textAlign: 'right' }}>{record.qtd}</td>
//     <td style={{ textAlign: 'center' }}>{formatDate(record.first_date).substring(5, 10)}</td>
//     <td style={{ textAlign: 'center' }}>{formatDate(record.last_date).substring(5, 10)}</td>
// </tr>)
