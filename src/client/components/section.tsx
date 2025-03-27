import "../App.css"

interface params {
    title:string,
    text:string
}

export const Section = (props:params) => {
  return (
    <div className="mb-6 pr-24">
      <h2 className="text-4xl font-bold mb-4 "> {props.title}</h2>
      <p className="text-2xl font['Verdana'] text-justify">
        {props.text}
      </p>
    </div>
  );
};
