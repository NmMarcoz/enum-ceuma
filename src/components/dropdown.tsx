import { useState } from "react";

interface params {
  text: string;
  icon: string;
  options: Array<{ id: number; value: string }>;
}
export const DropDownButton = (props: params) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button className="w-90 h-16 bg-white rounded-[10px]">
      <div className="flex justify-center items-center text-center">
        <p className="text-[#5C5F62] text-2xl font-bold mr-4 mb-0">
          {props.text}
        </p>
        <span className="block" onClick={() => toggleIsOpen()}>
          <img src={props.icon} alt="drop-down icon " className="m-0" />
        </span>
      </div>
      {isOpen &&
        (props.options.length === 0 ? (
          <li className="list-none not-visited:bg-white text-black lex items-center gap-2 p-4 hover:bg-[#936bc3] hover:text-white transition-all duration-200`">
            <span> Sem opções de tamanhos</span>
          </li>
        ) : (
          <div className=" absolute translate-1.5 rounded bg-[#20212c] w-90">
            <ul className="flex flex-col ">
              {props.options.map((option) => (
                <li
                  className="list-none not-visited:bg-white text-black lex items-center gap-2 p-4 hover:bg-[#936bc3] hover:text-white transition-all duration-200`"
                  key={option.id}
                >
                  <span className="text-[20px] font-bold text-[#5C5F62]">
                    {option.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </button>
  );
};
