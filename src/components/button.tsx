interface params{
    title:string
}
export const Button = (props:params)=>{
    return(
        <button className="w-90 h-16 bg-white rounded-[10px]">
            <span>{props.title}</span>
        </button>
    )
}