import { Card, CardBody, CardHeader, Table, Badge, Button } from '../components';
import { mockInvoices } from '../data/mockData';
import DashboardLayout from './DashboardLayout';
import './Invoices.css';

export default function Invoices() {
  const columns = [
    { key: 'id', label: 'Invoice ID' },
    { key: 'date', label: 'Date' },
    { key: 'orderId', label: 'Order ID' },
    { key: 'amount', label: 'Amount', render: (val) => `$${val.toFixed(2)}` },
    {
      key: 'status',
      label: 'Status',
      render: (val) => <Badge variant={val.toLowerCase()}>{val}</Badge>
    },
    {
      key: 'id',
      label: 'Action',
      render: (val, row) => (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => alert(`Downloaded invoice ${val}`)}
        >
          Download
        </Button>
      )
    }
  ];

  return (
    <DashboardLayout title="Invoices">
      <Card>
        <CardHeader>
          <h3>Invoices</h3>
        </CardHeader>
        <CardBody className="no-padding">
          <Table columns={columns} data={mockInvoices} />
        </CardBody>
      </Card>
    </DashboardLayout>
  );
}
