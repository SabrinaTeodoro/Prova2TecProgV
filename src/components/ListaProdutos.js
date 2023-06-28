export default function ListaProdutos({produtos, editar, excluir}){
    console.log(produtos)
    return(
        <div>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
                <th scope="col">Estoque</th>
                <th scope="col">Descrição</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>
                    <button className="btn btn-warning mx-2">Editar</button>
                    <button className="btn btn-danger">Excluir</button>
                </td>
            </tr> */}
                {/* {
                    produtos.map(
                        p => <LinhaTabela produto={produtos}/>
                    )
                } */}
                {
                    produtos.map(
                        (p, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td>{p.estoque}</td>
                                <td>{p.descricao}</td>
                                <td>
                                    <button className="btn btn-warning mx-2" onClick={(event) => editar(p.id)}>Editar</button>
                                    <button className="btn btn-danger" onClick={(event) => excluir(p.id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
            </table>
        </div>
    )
}