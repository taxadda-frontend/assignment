import { Button, Modal, Input } from 'antd';
import { useState, useEffect } from 'react';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newItem, setNewItem] = useState({})
  const [itemID, setItemID] = useState(1)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    let items = localStorage.getItem("items");
    items = JSON.parse(items)
    setItemID(itemID + 1)
    const updateItems = [...items, { ...newItem, id: itemID }]
    localStorage.setItem("items", JSON.stringify(updateItems));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeName = (e) => {
    setNewItem({ ...newItem, productName: e.target.value })
  }

  const handleChangeQty = (e) => {
    setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
  }

  const handleChangePrice = (e) => {
    setNewItem({ ...newItem, price: parseInt(e.target.value) })
  }

  const handleChangeAmount = () => {
    let amount =  newItem.quantity * newItem.price
    setNewItem({ ...newItem, amount: parseInt(amount) })
  }

  const handleChangeGSTRate = (e) => {
    setNewItem({ ...newItem, gstRate: parseInt(e.target.value) })
  }

  useEffect(() => {
    handleChangeAmount()
  }, [newItem.price, newItem.quantity])


  return (
    <>
      <Button type="danger" onClick={showModal}>
        Add Item
      </Button>
      <Modal title="Add Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Item name" type="text" onChange={handleChangeName} value={newItem.productName} />
        <Input placeholder="Qty" type="number" onChange={handleChangeQty} value={newItem.quantity} />
        <Input placeholder="Price" type="number" onChange={handleChangePrice} value={newItem.price} />
        <Input placeholder="GST Rate" type="number" onChange={handleChangeGSTRate} value={newItem.gstRate} />
        <p>Gross Amount: {isNaN(newItem.amount) ? "" : newItem.amount}</p>
      </Modal>
    </>
  );
};

export default App;