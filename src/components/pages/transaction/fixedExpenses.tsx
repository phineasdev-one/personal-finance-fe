import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FixedExpenses = () => {
  const fixedExpenses = [
    { name: "Thuê nhà", amount: 2500000 },
    { name: "Internet", amount: 500000 },
    { name: "Phí gửi xe", amount: 500000 },
  ];

  return (
    <div className='rounded-md border bg-white p-4 shadow-sm'>
      <h4 className='text-lg font-medium mb-4'>Fixed Expenses</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fixedExpenses.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.amount.toLocaleString()}₫</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FixedExpenses;
