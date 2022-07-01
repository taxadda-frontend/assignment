import { Button, Modal, Checkbox, Form, Input, Radio, message } from 'antd';
import { useState, useEffect } from 'react';
import Modal2 from "./Modal2";
import axios from 'axios'
import emailjs from '@emailjs/browser';

const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [items, setItems] = useState([])
    const [invoice, setInvoice] = useState({ name: "", dueDate: "", billNo: "", billDate: "", email: "", notes: ""})
    const [grossAmount, setGrossAmount] = useState(0);
    const [gstAmount, setGstAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [valueRadio, setValueRadio] = useState("");


    useEffect(() => {
        // const firstItem = [{ id: '1', name: 'abishek', quantity: 23, price: 20, amount: 100, gstRate: 5 }]
        localStorage.setItem("items", JSON.stringify([]))
        let getItems = localStorage.getItem("items")
        getItems = JSON.parse(getItems)
        setItems(getItems);
    }, [])

    useEffect(() => {
        handleGrossAmount()
        handleGSTAmount()
    }, [items])

    useEffect(() => {
        handleTotalAmount()
    }, [grossAmount, gstAmount])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAddItem = () => {
        let getNewItems = localStorage.getItem("items");
        getNewItems = JSON.parse(getNewItems)
        setItems(getNewItems)
    }

    const saveInvoice = async () => {
        setInvoice({ ...invoice, lineItems: items, grossAmount: grossAmount, gstAmount: gstAmount, netAmount: totalAmount, status: valueRadio })
        console.log(invoice)
        try {
            await axios.post(`https://rscdev.taxadda.com/api/invoice/add`, JSON.stringify(invoice))
        } catch (error) {
            console.log(error)
        }
        message.success("Invoice Added Successfully")
        handleOk()
    }

    const handleChangeID = (e) => {
        setInvoice({ ...invoice, billNo: e.target.value })
    }

    const handleChangeName = (e) => {
        setInvoice({ ...invoice, name: e.target.value })
    }

    const handleChangeEmail = (e) => {
        setInvoice({ ...invoice, email: e.target.value })
    }

    const handleChangeBDate = (e) => {
        setInvoice({ ...invoice, billDate: e.target.value })
    }

    const handleChangeDDate = (e) => {
        setInvoice({ ...invoice, dueDate: e.target.value })
    }

    const handleChangeNotes = (e) => {
        setInvoice({ ...invoice, notes: e.target.value })
    }

    const handleGrossAmount = () => {
        let amount = items.reduce((total, item) => {
            return total + item.amount
        }, 0)

        setGrossAmount(amount)
    }

    const handleGSTAmount = () => {
        let amount = items.reduce((total, item) => {
            let gst = ((item.gstRate * item.amount) / 100)
            return total + gst
        }, 0)

        setGstAmount(amount)
    }

    const handleTotalAmount = () => {
        setTotalAmount(grossAmount + gstAmount)
    }

    const onChangeRadio = (e) => {
        setValueRadio(e.target.value);
    };

    const emailInvoice = () => {

        setInvoice({ ...invoice, lineItems: items, grossAmount: grossAmount, gstAmount: gstAmount, netAmount: totalAmount, status: valueRadio })
        if (invoice.grossAmount == undefined) {
        message.error("Please click on Send Email again")
        } else {
            message.success("Email sending")
            emailjs.send('service_jvq5ayu', 'contact_form', {...invoice, mailItems: JSON.stringify(items)}, 'kkWx7WawYa2WekP02')
            .then((result) => {
                message.success("Email sent successfully")
            }, (error) => {
                message.error("Error sending Email")
                console.log(error.text);
            });
        }
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                New Invoice
            </Button>

            <Modal title="Add New Invoice" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={false}>
                <div className='invoice-top'>
                    <Input type="number" placeholder="Bill No." addonBefore="Bill No." onChange={handleChangeID} value={invoice.billNo} />
                    <Input type="text" placeholder="Client Name" addonBefore="Client Name" onChange={handleChangeName} value={invoice.name} />
                    <Input type="email" placeholder="Client Email" addonBefore="Client Email" onChange={handleChangeEmail} value={invoice.email} />
                    <Input type="date" placeholder="Bill Date" addonBefore="Bill Date" onChange={handleChangeBDate} value={invoice.billDate} />
                    <Input type="date" placeholder="Due Date" addonBefore="Due Date" onChange={handleChangeDDate} value={invoice.dueDate} />
                </div>

                <div className='items-list'>
                    <table className='modal-table modal-table-header'>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Total</th>
                                <th>GST Rate</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {items.map((item) => {
                    return (
                        <table className='modal-table'>
                            <tbody>
                                <tr>
                                    <td>{item.productName}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹ {item.price}</td>
                                    <td>₹ {item.amount}</td>
                                    <td>{item.gstRate} %</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}

                <div className='invoice-bottom'>

                    <div onClick={handleAddItem} className="invoice-modal">
                        <Modal2 />
                    </div>

                    <div className='invoice-bottom-amount'>
                        <p>Gross Amount: ₹ {grossAmount}</p>
                        <p>GST Amount: ₹ {gstAmount}</p>
                        <p>Total Amount: ₹ {totalAmount}</p>
                        Status:
                        <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                            <Radio value="due">Due</Radio>
                            <Radio value="paid">Paid</Radio>
                        </Radio.Group>

                    </div>

                    <div className='invoice-bottom-notes'>
                        <p>Notes:</p>
                        <Input.TextArea onChange={handleChangeNotes} value={invoice.notes} />
                    </div>

                    <div className='invoice-bottom-submit'>
                        <Button type='primary' onClick={saveInvoice}>Save Invoice</Button>
                        <Button type='primary' onClick={emailInvoice}>Email Invoice</Button>
                    </div>
                </div>


            </Modal>
        </>
    );
};

export default App;