const countv=document.querySelector('#counter')
const inc=()=>{
    let value=parseInt(countv.innerText);
    value=value+1;
    countv.innerText=value;

}
const dec=()=>{
    let value=parseInt(countv.innerText);
    value=value-1;
    countv.innerText=value;
}