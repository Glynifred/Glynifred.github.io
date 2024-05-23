import './input.css'

//labeled Text input
export default function Input({label}: {label: string}){
    switch(label)
    {
        case "Length":
            return (<>
                <label htmlFor={label}>{label}</label>
                <input type="number" id={label} />
                </>)
        break;  
        case "Width":
            return (<>
                <label htmlFor={label}>{label}</label>
                <input type="number" id={label} />
                </>)
        break;  
        case "Height":
            return (<>
                <label htmlFor={label}>{label}</label>
                <input type="number" id={label} />
                </>)
        break; 
        case "Angle":
            return (<>
                <label htmlFor={label}>{label}</label>
                <input type="number" id={label} />
                </>)
        break; 
        case "Maxpanel":
            return (<>
                <label htmlFor={"Max fitting panel's"}>Max fitting panel's</label>
                <input type="checkbox" id={label} />
                <div id = "text">Tick to use maximum panels when calculating values</div>
                </>)
        break; 
        case "PanelAmount":
            return (<>
                <label htmlFor={label}>{label}</label>
                <input type="number" id={label} />
                </>)
        break; 
        case "Postcode":
            return (<>
                <label htmlFor={label}>{label}</label>
                <input type="string" id={label} />
                </>)
        break; 
    }
    
}