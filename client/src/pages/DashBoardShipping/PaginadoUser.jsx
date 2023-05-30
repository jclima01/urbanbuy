
const PaginadoUser =()=>{
    const TotalPaginas=8;
    
    const generarPaginado=()=>{
    const paginas=[];
        for (let index = 1; index <= TotalPaginas; index++) {
          paginas.push(<span key={index} className={index==1?'page pageActive':'page'}>{index}</span>);

        }
    return paginas;
    };
    return generarPaginado()


}
export default PaginadoUser;