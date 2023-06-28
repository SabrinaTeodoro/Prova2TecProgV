import { useState } from "react"
import axios from "axios"
import './App.css';
import Cadastro from './components/Cadastro'
import ListaProdutos from './components/ListaProdutos';

function App() {
  const [produtos, setProdutos] = useState([])
  function updateLista(data){
    //setProdutos()
    axios.get("http://3.137.177.147:3000/produtos")
      .then(res => {
        console.log(res)
        setProdutos(res.data)
      })
      .catch(err => alert("Erro ao atualizar lista de produtos."))
  }
  function handleExcluir(id){
    //console.log(id) 
    axios.delete(`http://3.137.177.147:3000/produtos/${id}`)
      .then(res => alert("Sucesso ao excluir!"))
      .catch(err => alert("Erro ao excluir item."))
  }
  function handleEditar(id){//NAO IMPLEMENTADO
    axios.put(`http://3.137.177.147:3000/produtos/${id}`)
      .then(res => alert("Sucesso ao editar!"))
      .catch(err => alert("Erro ao editar item."))
  }

  return (
    <div className="container" >
      <Cadastro 
        updateLista={updateLista}
      />
      <ListaProdutos 
        produtos={produtos}
        updateLista={updateLista}
        excluir={handleExcluir}
        editar={handleEditar}
      />
    </div>
  );
}

export default App;
