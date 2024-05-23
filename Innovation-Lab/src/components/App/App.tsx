import './App.css'
import House from '../House/House'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {Solarcalc} from '../../../Solarmath'

let labels = ["Length","Width","Height","Angle","Maxpanel","PanelAmount","Postcode"]

function App() {
  let labelList:Array<JSX.Element> = [] 

  labels.forEach((label)=>{
    labelList.push(<Input label = {label} key={label} />)// puts element in list
  })
  
  
  return (
    <>
      <main>
        <div id='logo'>SolMetrics</div>
        <form>
          {labelList}
        </form>
      <div id = 'name'>Resulting power output</div>
      <div id="result"></div>
      </main>
      <aside>
        <div id="canvas-parent">
          <House/>
        </div>
        <Button name= "Calculate" OnClick = {Solarcalc}/>
      </aside>
      <div id = "table">
      <div id= "tableleft"class="tableinput">Pannel name</div>
        <div class="tableinput">efficency %</div>
        <div class="tableinput">height M</div>
        <div class="tableinput">Width M</div>
        <div class="tableinput">Energy generated per year KWH</div>
        <div class="tableinput">Money generated per day £</div>
        <div class="tableinput">price to install</div>
        <div class="tableinput">years to make money back</div>
        <div class="tableinput">hours of free tv a year</div>
        <div id= "tableright" class="tableinput">Link</div>
<div id="table1" class="tableinput"></div>
<div id="table2" class="tableinput"></div>
<div id="table3" class="tableinput"></div>
<div id="table4" class="tableinput"></div>
<div id="table5" class="tableinput"></div>
<div id="table6" class="tableinput"></div>
<div id="table7" class="tableinput"></div>
<div id="table8" class="tableinput"></div>
<div id="table9" class="tableinput"></div>
<div id="table10" class="tableinput"></div>
<div id="table11" class="tableinput"></div>
<div id="table12" class="tableinput"></div>
<div id="table13" class="tableinput"></div>
<div id="table14" class="tableinput"></div>
<div id="table15" class="tableinput"></div>
<div id="table16" class="tableinput"></div>
<div id="table17" class="tableinput"></div>
<div id="table18" class="tableinput"></div>
<div id="table19" class="tableinput"></div>
<div id="table20" class="tableinput"></div>
<div id="table21" class="tableinput"></div>
<div id="table22" class="tableinput"></div>
<div id="table23" class="tableinput"></div>
<div id="table24" class="tableinput"></div>
<div id="table25" class="tableinput"></div>
<div id="table26" class="tableinput"></div>
<div id="table27" class="tableinput"></div>
<div id="table28" class="tableinput"></div>
<div id="table29" class="tableinput"></div>
<div id="table30" class="tableinput"></div>
<div id="table31" class="tableinput"></div>
<div id="table32" class="tableinput"></div>
<div id="table33" class="tableinput"></div>
<div id="table34" class="tableinput"></div>
<div id="table35" class="tableinput"></div>
<div id="table36" class="tableinput"></div>
<div id="table37" class="tableinput"></div>
<div id="table38" class="tableinput"></div>
<div id="table39" class="tableinput"></div>
<div id="table40" class="tableinput"></div>
<div id="table41" class="tableinput"></div>
<div id="table42" class="tableinput"></div>
<div id="table43" class="tableinput"></div>
<div id="table44" class="tableinput"></div>
<div id="table45" class="tableinput"></div>
<div id="table46" class="tableinput"></div>
<div id="table47" class="tableinput"></div>
<div id="table48" class="tableinput"></div>
<div id="table49" class="tableinput"></div>
<div id="table50" class="tableinput"></div>
<div id="table51" class="tableinput"></div>
<div id="table52" class="tableinput"></div>
<div id="table53" class="tableinput"></div>
<div id="table54" class="tableinput"></div>
<div id="table55" class="tableinput"></div>
<div id="table56" class="tableinput"></div>
<div id="table57" class="tableinput"></div>
<div id="table58" class="tableinput"></div>
<div id="table59" class="tableinput"></div>
<div id="table60" class="tableinput"></div>
<div id="table61" class="tableinput"></div>
<div id="table62" class="tableinput"></div>
<div id="table63" class="tableinput"></div>
<div id="table64" class="tableinput"></div>
<div id="table65" class="tableinput"></div>
<div id="table66" class="tableinput"></div>
<div id="table67" class="tableinput"></div>
<div id="table68" class="tableinput"></div>
<div id="table69" class="tableinput"></div>
<div id="table70" class="tableinput"></div>
<div id="table71" class="tableinput"></div>
<div id="table72" class="tableinput"></div>
<div id="table73" class="tableinput"></div>
<div id="table74" class="tableinput"></div>
<div id="table75" class="tableinput"></div>
<div id="table76" class="tableinput"></div>
<div id="table77" class="tableinput"></div>
<div id="table78" class="tableinput"></div>
<div id="table79" class="tableinput"></div>
<div id="table80" class="tableinput"></div>
<div id="table81" class="tableinput"></div>
<div id="table82" class="tableinput"></div>
<div id="table83" class="tableinput"></div>
<div id="table84" class="tableinput"></div>
<div id="table85" class="tableinput"></div>
<div id="table86" class="tableinput"></div>
<div id="table87" class="tableinput"></div>
<div id="table88" class="tableinput"></div>
<div id="table89" class="tableinput"></div>
<div id="table90" class="tableinput"></div>
<div id="table91" class="tableinput"></div>
<div id="table92" class="tableinput"></div>
<div id="table93" class="tableinput"></div>
<div id="table94" class="tableinput"></div>
<div id="table95" class="tableinput"></div>
<div id="table96" class="tableinput"></div>
<div id="table97" class="tableinput"></div>
<div id="table98" class="tableinput"></div>
<div id="table99" class="tableinput"></div>
<div id="table100" class="tableinput"></div>
      </div>
    </>
  )
}

export default App
