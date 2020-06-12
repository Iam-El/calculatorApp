function display(val) {
  if (val=="=" ){
    valueNow=document.getElementById('my-display').value;
    result=eval(valueNow);
    valueNow=document.getElementById('my-display').value=result;
  }
  else {
    document.getElementById('my-display').value += val;
  }

}

function handleClear() {
  document.getElementById('my-display').value="";

}
