

export const getInvoicesData =async()=>{
    try{
        const res = await fetch(`https://rscdev.taxadda.com/api/invoice/list`,{
            method:'get',
            headers:{"Content-Type" :"application/json"}
        })
        return res.json()
    }catch(error){
        return error
    }
}

export const createNewInvoice =async(data)=>{
    try{
        const res = await fetch(`https://rscdev.taxadda.com/api/invoice/add`,{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return res.json()
    }
    catch(err){
        return err
    }
}