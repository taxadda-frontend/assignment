import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PageHeader, Button } from 'antd';
import Invoices from './components/Invoices';
import PopupModal from './components/Modal';



function App() {

  return (
    <>
    <header>
    <PageHeader
        className="site-page-header"
        title="InvoiceAdda"
        extra={[
          <PopupModal key={1} />
        ]}
      />
    </header>
    <Invoices />
    
    </>
  );
}

export default App;
