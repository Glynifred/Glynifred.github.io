
// type script
export  async function Solarcalc() {
    //gets pointer to input elements
    const lengthPointer = document.getElementById("Length") as HTMLInputElement;
    const widthPointer = document.getElementById("Width") as HTMLInputElement;
    const heightPointer = document.getElementById("Height") as HTMLInputElement;
    const anglePointer = document.getElementById("Angle") as HTMLInputElement;
    const maxPointer = document.getElementById("Maxpanel") as HTMLInputElement;
    const panelPointer = document.getElementById("PanelAmount") as HTMLInputElement;
    const postPointer = document.getElementById("Postcode") as HTMLInputElement;
    const outputpointer = document.getElementById("result") as HTMLLabelElement;
    let pannelname: string[] = ["325W JA Solar Mono MBB Percium Half-Cell All Black MC4 Solar Panel","340W Eurener All Black Half-Cut Mono Solar Panel","415W Canadian Solar High Power Mono PERC HiKU Black Frame with MC4-EVO2 Solar panel","395W Canadian Solar High Power Mono PERC HiKU6 All Black with MC4 Solar Panel","445Wp Jinko Tiger Neo TOPCon N-Type 54 Rectangular cell Black Frame Solar Panel","295W Perlight Delta Mono PERC Triple Black 54 Cell","335W Viridian Clearline Mono All Black G1 Version 3 BIPV roof integrated solar panel","405W REC TwinPeak 5 Series All Black Panel","430W Eurener Nexa TOPCon Mono Black Solar Panel","420W JA Solar N-type Bifacial Double Glass Mono GB Black Frame with MC4 connectors Solar Panel"];
    let pannelwidth: number[] = [.996,1.002,1.134,1.134,1.134,1.002,1.000,1.040,1.134,1.134];
    let pannelheight: number[] = [1.689,1.684,1.722,1.722,1.722,1.504,1.686,1.899,1.724,1.722];
    let pannelprice: number[] = [63.86,67.87,75.60,79.20,91.16,148.21,219.60,104.40,97.41,72.40];
    let efficency: number[] = [.193,.20,.207,.202,.221,.196,.199,.205,.2201,.215];
    let links: string[] = ["https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/325w-ja-solar-mono-mbb-percium-half-cell-all-black-mc4-solar-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/340w-eurener-all-black","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/415w-canadian-solar-high-power-mono-perc-hiku-black-frame-with-mc4-evo2-solar-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/395w-canadian-solar-high-power-mono-perc-hiku6-all-black-with-mc4-solar-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/445wp-jinko-tiger-neo-topcon-n-type-54-rectangular-cell-black-frame-monocrystalline-solar-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/295w-perlight-delta-mono-perc-triple-black-54-cell-1","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/335w-viridian-clearline-mono-all-black-g1-version-3-bipv-roof-integrated-solar-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/405w-rec-twinpeak-5-series-all-black-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/430w-eurener-nexa-430w-topcon-mono-black-solar-panel","https://www.itstechnologies.shop/collections/solar-panels-buy-online/products/420w-n-type-bifacial-double-glass-mono-gb-black-frame-with-mc4-connectors-solar-panel-25-yr-product-warranty",];
    let temp: number;
    let rem: number;
    let area: number;
    let tiltmod: number;
    let anglemod: number;
    let angletiltmod: number;
    let kwhprice = .2450 as number;
    let numofpanels: number;
    let tempelement: string;
    let count: number = 1;
    //let sun: number;
    //gets the value from the input elements
    const height = parseFloat(heightPointer.value);
    const width = parseFloat(widthPointer.value);
    const length = parseFloat(lengthPointer.value);
    const angle = parseFloat(anglePointer.value);
    const postcode = postPointer.value;
    const pannelamount = parseFloat(panelPointer.value);
    //let sun : number = await fetch("http://127.0.0.1:5000/GetDNI?postcode=" + (postcode)).then(res => {return res.json()}).then(res =>{ return res.DNI})
    let sun = 50;
    const max = maxPointer.checked;
//calculates tilt from 0 in degrees using the width of the house and the height of the roof
const tilt = (Math.atan((height/(width/2)))*(180/Math.PI))
const hyp = Math.sqrt(((width/2)**2)+(height**2))
//tilt Modifier that impacts efficiency based on tilt as .72 as 90*
//Get degrees tilt off flat
if (tilt >=25 && tilt <=50)
{
tiltmod = 1;
}
if (tilt < 25)
{
temp = 25 - tilt;
tiltmod=(100 - (temp * .5))/100;
}
if (tilt > 50)
{
temp = +tilt - 50;
tiltmod =(100- (temp * .7))/100;
}
//angle mod Gives the effect of angle on efficiency as .55 efficiency at north
//Get angle off due south angle
if (angle <= 45)
{
anglemod = (100 - (angle * .111) )/100;
}
if (angle > 45 && angle <= 135)
{
temp = angle - 45;
anglemod = (100 - ((temp) * .333)-5)/100;
}
if (angle > 135 && angle <= 180)
{
temp = angle - 135;
anglemod = (100 - ((temp) * .222)-35)/100;
}
//Modifier that affects angles impact based on tilt used in place of angle
temp = 1 - anglemod
if (tilt <= 35)
{
rem = 35 - tilt
angletiltmod = ((rem/35) * temp) + anglemod;
}
if (tilt > 35)
{
angletiltmod = anglemod - ((((tilt-35)/55)*temp)*anglemod);
}
//area needs chaning with area of pannels that can fit
for (let x = 0; x <= 9; x++){
    //test if user specified an amount of solar panels if not calulates the max amount of solarpanels
    console.log(max);
    if(max == true)
        {
            //calculates how many solarpannels fit up right
area = Math.trunc(length/pannelwidth[x]) * Math.trunc(hyp/pannelheight[x]);
//tests if theres space for rowes horrizontaly bellow by subtracting the already allocated space
if(hyp - (Math.trunc(hyp/pannelheight[x])*pannelheight[x]) >= pannelwidth[x])
{ //adds the horrizontal rows to the area
    area = area + (Math.trunc(((hyp - (Math.trunc(hyp/pannelheight[x])*pannelheight[x]))/pannelwidth[x])) * Math.trunc(length/pannelheight[x]))
}
//calculates how many solarpannels fit up right using temp to later compare which has more area
temp = Math.trunc(length/pannelheight[x]) * Math.trunc(hyp/pannelwidth[x]);
//tests to see if theres any space vertically to the right
if(length - (Math.trunc(length/pannelheight[x])*pannelheight[x]) >= pannelwidth[x])
{
    //adds the vertical rows to the area
    temp = temp + (Math.trunc(((length - (Math.trunc(length/pannelwidth[x])*pannelwidth[x]))/pannelheight[x])) * Math.trunc(length/pannelwidth[x]))
}
//makes area the bigger value
if (area < temp)
{
    area = temp;
}
}
else{
    area = pannelamount;
}
//gets the number of solar panels for use with maths
numofpanels = area;
//converts amount of panels to direct area change area to amount of panels wanted if not using maximum
area = area * (pannelheight[x] * pannelwidth[x]);
//outputs pannel information should be changed to input to table later
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = pannelname[x];
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = (Math.round(efficency[x] * 100) / 100).toFixed(2);
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = pannelheight[x];
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = pannelwidth[x];
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = (Math.round(sun * area * efficency[x] * tiltmod * angletiltmod * 100) / 100).toFixed(2);;
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML ="£" + (Math.round((sun * area * efficency[x] * tiltmod * angletiltmod * kwhprice) / 365 * 100) / 100).toFixed(2);
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = "£" + (Math.round(pannelprice[x] * numofpanels * 100) / 100).toFixed(2);
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = (Math.round((pannelprice[x] * numofpanels)/((sun * area * efficency[x] * tiltmod * angletiltmod * kwhprice)) * 100) / 100).toFixed(2) + " years";
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = (Math.round((sun * area * efficency[1] * tiltmod * angletiltmod)/150 * 100) / 100).toFixed(2) + " hours";
tempelement = "table" + count;
count++;
document.getElementById(tempelement).innerHTML = links[x];
}
count = 1;
//output of KWH over the year
outputpointer.innerHTML = (Math.round(sun * area * efficency[1] * tiltmod * angletiltmod * 100) / 100).toFixed(2);
if (width != 0)
    {
    window.x = width;
    window.y = length;
    window.z = height;
    }
    else
    {
    window.x = 1;
    window.y = 1;
    window.z = 1;
    }

}