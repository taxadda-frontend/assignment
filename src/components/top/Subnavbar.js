import React from 'react'
import styled from 'styled-components'

const Subnavbar = () => {
  const createInvoice = ()=> {
    /** 
     @todo: Create Invoice
    **/
   console.warn("Create Invoice function")
  
  }
  return (
    <Main>
        <div className="subItem span">Invoices</div>
        <div className="subItem">
            <div onClick={createInvoice} className="button">+NewInvoice</div>
           
            </div>
        
    </Main>
  )
}

const Main =styled.div`
min-width:80vw;

display:flex;
justify-content:space-between;
align-items:center;
& .button{
    background-color:#d4e3fa;
    border-radius:10%;
    color:#2f80fa;
    padding-left:1em;
    padding-right:1em;
    padding-top:.4em;
    padding-bottom: .4em;
    cursor: pointer;
    &:hover {
      background-color: #d4f0ff;
    } 
}
& .span{
    font-weight:bolder;
    font-size:2em;
    color:#474747;
}
& .subItem{
    padding: .4em 0;

}
 
`
export default Subnavbar