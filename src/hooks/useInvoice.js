import { useState } from "react";
import { createNewInvoice, getInvoicesData } from "../api/invoices";


const useInvoice =()=>{
    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [lineItems,setLineItems] = useState([])
    
    const getInvoices =async()=>{
        setErr()
        const res = await getInvoicesData()
        setData(res.invoices)
        setIsLoading(false)
    }

    const createInvoice =async(data)=>{
        setErr()
        const res = await createNewInvoice(data)
        if(res.message) setErr(res.message)
        setIsLoading(false)
    }

    const createLineItems =(some)=>{
        setLineItems([...lineItems,some])
    }

    return {isLoading,data,err,getInvoices,createInvoice,createLineItems,lineItems}
}

export default useInvoice;