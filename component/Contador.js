const Contador = () => {

  // Vamos a crear el estado de el contador

  const [contador, setContador] = React.useState(0);

  // cambiamos el valor del modificador dependiendo su funcion
  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);
  const elevar = ()=> setContador(contador + 10);
  const retroceder = ()=> setContador(contador - 10);
  const restaurar = () => setContador(contador * 0)
  if(contador<0 || contador >100){
    alert("Limite alcanzado");
    setContador(contador*0);
  }
  return( 
    <div>
      <h1 className= {(contador % 2 )==0 ? "par" : "impar"}>Contador: {contador}</h1>
      <h5>{(contador % 2 )==0 ? "Par" : "Impar"}</h5>
      <hr/>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={elevar}>Aumentar en 10</button>
      <button onClick={retroceder}>Disminuir en 10</button>
      <button onClick={restaurar}>Restaurar</button>
    </div>

    
  );
}




