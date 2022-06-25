import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react'
import useInvoice from '../hooks/useInvoice'

const Create =()=>{
    const [invoice,setInvoice] = useState({
        'name':'',
        'status':'',
        'billNo':0,
        'billDate':0,
        'grossAmount':0,
        'gstAmount':0,
        'netAmount':0,
        'notes':''
    })
    const {createInvoice,err,lineItems,createLineItems} = useInvoice()
    return(
        <>
            <Form
            title={'Create Invoice'}
            >
                <div className='flex flex-row gap-[15px]'>
                    <Input
                        title={'name'}
                        classes={'w-full'}
                        required={true}
                        type={'text'}
                        action={(e)=>setInvoice({...invoice,"name":e.target.value})}
                        placeholder={"Client's name"}
                    />
                    <Input
                        title={'status'}
                        classes={'w-full'}
                        required={true}
                        type={'text'}
                        action={(e)=>setInvoice({...invoice,"status":e.target.value})}
                        placeholder={"Status"}
                    />
                </div>
                <div className='flex flex-row gap-[15px]'>
                    <Input
                        title={'billNo'}
                        classes={'w-full'}
                        required={true}
                        type={'number'}
                        action={(e)=>setInvoice({...invoice,"billNo":e.target.value})}
                        placeholder={"Bill no"}
                    />
                    <Input
                        title={'billDate'}
                        classes={'w-full'}
                        required={true}
                        type={'number'}
                        action={(e)=>setInvoice({...invoice,"billDate":e.target.value})}
                        placeholder={"Bill date"}
                    />
                </div>
                <div className='flex flex-row gap-[15px]'>
                    <Input
                        title={'dueDate'}
                        classes={'w-full'}
                        type={'number'}
                        required={true}
                        action={(e)=>setInvoice({...invoice,"dueDate":e.target.value})}
                        placeholder={"Due date"}
                    />
                    <Input
                        title={'grossAmount'}
                        classes={'w-full'}
                        type={'number'}
                        required={true}
                        action={(e)=>setInvoice({...invoice,"grossAmount":e.target.value})}
                        placeholder={"Gross amount"}
                    />
                </div>
                <Input
                    title={'gstAmount'}
                    classes={'w-full'}
                    type={'number'}
                    required={true}
                    action={(e)=>setInvoice({...invoice,"gstAmount":e.target.value})}
                    placeholder={'Gst amount'}
                />
                <div className='flex flex-row gap-[15px]'>
                    <Input
                        classes={'w-full'}
                        required={true}
                        type={'number'}
                        action={(e)=>setInvoice({...invoice,"netAmount":e.target.value})}
                        placeholder={"Net amount"}
                    />
                    <Input
                        title={'notes'}
                        classes={'w-full'}
                        required={true}
                        type={'text'}
                        action={(e)=>setInvoice({...invoice,"notes":e.target.value})}
                        placeholder={"Notes"}
                    />
                </div>
                
                {err&&err}
                <div className='w-full mt-2 flex justify-end gap-5'>
                    <Button
                        text={'Submit'}
                        width={'7rem'}
                        loadingState={'none'}
                        action={()=>createInvoice(invoice)}
                    />
                </div>
                
            </Form>
        </>
    )
}

export default Create;