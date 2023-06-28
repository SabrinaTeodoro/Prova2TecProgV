import { useState } from "react"
import axios from "axios"

export default function Cadastro({updateLista}){
    const [formData, setFormData] = useState({
        nome: "",
        preco: 0,
        descricao: "",
        estoque: 0
    })
    
    function handleSubmit(event){
        event.preventDefault()
        //console.log(event.target.descricao.value)
        console.log(formData)
        axios.post("http://3.137.177.147:3000/produtos",formData)
            .then(res => {
                //update lista
                updateLista(res.data)
            })
            .catch(err => alert("Erro ao salvar."))
    }
    function handleChange({target}){
        setFormData(
            (prev) => {
                return {
                    ...prev,
                    [target.name]: target.value
                }
            }
        )
    }
    
    return (
        <div>
            <h1>Gerenciamento de produtos</h1>
            
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input 
                            name="nome" 
                            type="text" 
                            id="nome" 
                            value={formData.nome} 
                            onChange={(event) => handleChange(event)} 
                            className="form-control"
                        ></input>
                    </div>
                    <div className="col">
                        <label htmlFor="preco" className="form-label">Preço</label>
                        <input 
                            name="preco" 
                            id="preco" 
                            step="0.1" 
                            value={formData.preco} 
                            type="number" 
                            onChange={(event) => handleChange(event)} 
                            className="form-control"
                        ></input>
                    </div>
                    <div className="col">
                        <label htmlFor="estoque" className="form-label">Estoque</label>
                        <input 
                            name="estoque" 
                            id="estoque" 
                            type="number" 
                            value={formData.estoque} 
                            onChange={(event) => handleChange(event)} 
                            className="form-control"
                        ></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea 
                        name="descricao" 
                        value={formData.descricao}
                        className="form-control" 
                        rows={10}
                        onChange={(event) => handleChange(event)} 
                    />
                </div>
                <button type="submit" className="btn btn-success my-3">Salvar</button>
            </form>
        </div>
    )
}