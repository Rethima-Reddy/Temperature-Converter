function convert()
{
    let KValue = parseFloat(document.getElementById("k1").value);
    let CValue = KValue+273.15;
    document.getElementById("l1").innerHTML=CValue;
}
document.querySelector("#b1").addEventListener('click',convert);