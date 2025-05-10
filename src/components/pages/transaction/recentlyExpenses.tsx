import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RecentlyExpenses = () => {
  return (
    <div className='rounded-md border bg-white p-4 shadow-sm'>
      <h4 className='text-lg font-medium mb-4'>Recent Expenses</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2025-05-09</TableCell>
            <TableCell>Cầu lông</TableCell>
            <TableCell className='text-red-500'>-500,000₫</TableCell>
            <TableCell>Thể thao</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2025-05-08</TableCell>
            <TableCell>Lương</TableCell>
            <TableCell className='text-green-500'>+10,000,000₫</TableCell>
            <TableCell>Thu nhập</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentlyExpenses;
