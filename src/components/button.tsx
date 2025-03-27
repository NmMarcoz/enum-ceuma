interface params{
    title:string
}
export const Button = (props:params)=>{
    return(
        <button className="w-60 h-16 bg-white rounded-[10px] ml-4 text-[#5C5F62] text-[24px]">
            <span>{props.title}</span>
        </button>
    )
}