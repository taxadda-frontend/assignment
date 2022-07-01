import { Space, Table, Tag } from 'antd';
import { useState, useEffect } from 'react'
import axios from 'axios'

const columns = [
  {
    title: 'Invoice ID',
    dataIndex: 'billNo',
    key: 'billNo',
  },
  {
    title: 'Client Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Amount',
    dataIndex: 'netAmount',
    key: 'netAmount',
    render: (text) => `₹ ${text}`,
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (text) => (
      <>
        <Tag color='geekblue' key={text}>
          {text}
        </Tag>
      </>
    ),
  },
];

const Invoices = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getAllInvoices();
  }, [])

  const getAllInvoices = async () => {
    const { data } = await axios.get('https://rscdev.taxadda.com/api/invoice/list')
    setData(data.invoices)
  }


  return (
    <>
      <div style={{ padding: "20px" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </>
  )
}

export default Invoices