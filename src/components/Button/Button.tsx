import './Button.css'

interface Props{
    name: string;
    OnClick: any; 
    
}
//button
export default function Button(props:Props){
    return (<>
    <button className = "button" onClick={props.OnClick}>{props.name}</button>
    </>
    )
}
