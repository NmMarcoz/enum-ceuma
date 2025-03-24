import "./App.css";
function App() {
  return (
    <div className="flex h-screen w-screen  pl-22 pr-22 items-center justify-center text-white text-center relative bg-gradient-to-l from-indigo-950 via-violet-900 to-violet-400 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="text-white text-left flex-1 items-center justify-center">
        <h1 className="text-6xl font-black mb-8">ENUM</h1>
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-4"> Definição</h2>
          <p className="text-2xl font['Verdana']">
          Semelhante ao tipo de dados <br/> 
          das linguagens sucintas da Orientação <br/> 
          a Objetos, o tipo ENUM também <br/>
          existe como uma implementação <br/> 
          direta no Banco de Dados. 
          Sua função é restringir, <br/>
          a determinada lista de valores, o <br/> 
          valor que o dado irá receber.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-4"> Definição</h2>
          <p className="text-2xl font['Verdana']">
          Se já existe na maioria das <br/>
          linguagens de programação, por<br/> 
          que eu deveria utilizar a nível de<br/>
          Banco de Dados? Simples,<br/> 
          performance e economia de espaço.<br/>
          Não especificarmos quais valores<br/> 
          aquele campo poderá receber,<br/> 
          facilita a codificação dele no <br/>
          database. 
          Confira o exemplo ao lado.
          </p>
        </div>
      </div>
      <div className="flex-1 items-center justify-center text-center">
        <div className="outline-1 border-2">
          <h2 className="text-3xl font-bold"> Definição </h2>
          <p> É um tipo de dado presente na maioria dos databases</p>
        </div>      
      </div>
    </div>
  );
}

export default App;
