import React from 'react'

const Pagination = ({page,setPage}) => {

    function changePage(num){
        setPage(page+num) 
    }

    return (
        <div className='d-flex justify-content-center m-3 '>
            <button className='bg-light p-1 rounded border ' onClick={()=>{changePage(-1)}} style={{height:'2rem', color:'#001222'}} disabled={page===1}>
                Anterior
            </button>
            <div className='fw-bold m-1 p-1 text-white'>{page}</div>
            <button className='bg-light p-1 rounded border ' onClick={()=>{changePage(1)}} style={{height:'2rem', color:'#001222'}}>
                Siguiente
            </button>      
        </div>
    )
}

export default Pagination
