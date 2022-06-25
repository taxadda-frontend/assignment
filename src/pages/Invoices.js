import { useEffect } from "react";
import Spinner from "../components/Spinner";
import useInvoice from "../hooks/useInvoice";

const Invoices =()=>{
    const {isLoading,data,err,getInvoices} = useInvoice()
    useEffect(()=>{
        const fetchData = async()=>{
            await getInvoices()
        }
        fetchData()
    },[])
    return(
        <>
            {
                isLoading
                ?
                <Spinner/>
                :
                <div className="card_container">
                    <div className="card bg-blue-500 p-2 text-center sticky top-[2.9rem]">
                        <p>Client</p>
                        <p>Amount</p>
                        <p>Product</p>
                        <p>Notes</p>
                    </div>
                    {data.map((d,i)=>{
                        return(
                            <div className="card bg-blue-300 p-2 text-center">
                                <p>{d.name}</p>
                                <p>{d.grossAmount}</p>
                                <p>{d.lineItem[0]?.productName}</p>
                                <p>{d.notes}</p>
                            </div>
                        )
                    })}
                </div>
                            
                
            }
        </>
    )
}

export default Invoices;