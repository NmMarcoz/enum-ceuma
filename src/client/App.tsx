import "./App.css";
import { Section } from "./components/section";
import tshirt from "./assets/blue-tshirt.png";
import dropDownIcon from "./assets/drop-down.png";
import { DropDownButton } from "./components/dropdown";
import { Button } from "./components/button";
import { useEffect, useState } from "react";
import { getSizes } from "../infra/services/sizesService";
import axios from "axios";

const mocked = [
  { id: 1, value: "pequena" },
  { id: 2, value: "grande" },
  { id: 1, value: "extra grande" },
];


function App() {

const [sizes, setSizes] = useState([]);

const handleSizes = (sizes:[])=>{
  setSizes(sizes);
}
  useEffect(()=>{
    axios.get("http://localhost:3000/sizes").then(response=>{
      console.log(response.data);
      handleSizes(response.data.data)
      return
    }).catch((err)=>{
      console.log("erro ao buscar sizes", err);
    });
  },[])
  return (
    <div className="flex h-screen w-screen  pl-22 pr-22  justify-center text-white text-center relative bg-gradient-to-r from-indigo-950 via-violet-900 to-violet-400 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden ">
      <div className="mt-32 flex">
        <div className="text-white text-left flex-1">
          <h1 className="text-6xl font-black mb-4">ENUM</h1>
          <Section
            title="Definição"
            text="Semelhante ao tipo de dados das linguagens sucintas da Orientação a Objetos, o tipo ENUM também existe como uma implementação direta no Banco de Dados. 
Sua função é restringir, a determinada lista de valores, o valor que o dado irá receber. 
Como definição, temos que um enum é um conjunto de constantes pré definidas."
          />
          <Section
            title="Por que usar?"
            text="Se já existe na maioria das linguagens de programação, por que eu deveria utilizar a nível de Banco de Dados? Simples, performance e economia de espaço. Ao especificarmos quais valores aquele campo poderá receber, facilita a codificação dele no database. 
Confira o exemplo ao lado."
          />
        </div>
        <div className="flex-1 items-center justify-center mt-20">
          <img src={tshirt} alt="blue-tshirt"></img>
          <div className="flex">
            <DropDownButton
              text="tamanho"
              icon={dropDownIcon}
              options={sizes}
            />
            <Button title="comprar"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
