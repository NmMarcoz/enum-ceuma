import "./App.css";
import { Section } from "./components/section";
import tshirt from "./assets/blue-tshirt.png";
import dropDownIcon from "./assets/drop-down.png";
import { DropDownButton } from "./components/dropdown";
import { Button } from "./components/button";

const mocked = [
  {id:1, value:'pequena'}, 
  {id:2, value:'grande'},
  {id: 1, value:'extra grande'}
  ]



function App() {

  return (
    <div className="flex h-screen w-screen  pl-22 pr-22 items-center justify-center text-white text-center relative bg-gradient-to-l from-indigo-950 via-violet-900 to-violet-400 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="text-white text-left flex-1 items-center justify-center">
        <h1 className="text-6xl font-black mb-8">ENUM</h1>
        <Section
          title="Definição"
          text="Semelhante ao tipo de dados das linguagens sucintas da Orientação a Objetos, o tipo ENUM também existe como uma implementação direta no Banco de Dados. 
Sua função é restringir, a determinada lista de valores, o valor que o dado irá receber."
        />
        <Section title="Por que usar?" text="Se já existe na maioria das linguagens de programação, por que eu deveria utilizar a nível de Banco de Dados? Simples, performance e economia de espaço. Ao especificarmos quais valores aquele campo poderá receber, facilita a codificação dele no database. 
Confira o exemplo ao lado."/>
      </div>
      <div className="flex-1 items-center justify-center">
        <img src={tshirt} alt="blue-tshirt" ></img>
        <DropDownButton 
          text="Selecionar tamanho" 
          icon={dropDownIcon}
          options={mocked}
        />
        <Button title="comprar"></Button>
      </div>
    </div>
  );
}

export default App;
