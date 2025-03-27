import { useState } from "react";

interface params {
  text: string;
  icon: string;
  options: Array<{ id: number; sizes: string }>;
}
export const DropDownButton = (props: params) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState(props.text);
  const toggleIsOpen = () => {
    console.log("clicou");
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  const handlePLaceholder = (text: string) => {
    setPlaceholder(text);
  };

  const handleAlert = () => {
    if (!props?.options || props.options?.length === 0) alert("Sem opções de tamanho");
  };

  return (
    <button className="w-70 ml-12 h-16 bg-white rounded-[10px]">
      <div className="flex justify-center items-center text-center">
        <p className="text-[#5C5F62] text-[22px]  mb-0">{placeholder}</p>
        <span
          className="pl-60 absolute w-90 block"
          onClick={() => {
            handleAlert()
            toggleIsOpen()
          }}
        >
          <img src={props.icon} alt="drop-down icon" className="m-0 scale-70" />
        </span>
      </div>
      {isOpen && props?.options?.length !== 0 && (
        <div className="absolute rounded bg-[#20212c] w-70 transition-all duration-100">
          <ul className="flex-1 ">
            {props?.options?.map((option) => (
              <li
                className="list-none not-visited:bg-white flex items-center gap-2  p-4 hover:bg-[#936bc3] text-[20px] hover:text-[14px] text-[#5C5F62] hover:text-white transition-all duration-200`"
                key={option.id}
                onClick={() => {
                  handlePLaceholder(option.sizes);
                  toggleIsOpen();
                }}
              >
                <span className="w-[100%] py-2">{option.sizes}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};
