import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TransactionItem from "./transactionItem";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TransactionType } from "@/types/transaction";

const transactions = [
  { type: TransactionType.IN, date: "05/05/2025", amount: 120000, name: "Shopping" },
  { type: TransactionType.OUT, date: "05/04/2025", amount: 12000, name: "Travel" },
  { type: TransactionType.IN, date: "05/02/2025", amount: 10000, name: "Salary" },
  { type: TransactionType.OUT, date: "02/05/2025", amount: 120000, name: "Loan" },
];

const Transaction = () => {
  return (
    <Card className={cn("gap-2 h-full")}>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <div className='p-0'>
            <h2 className='text-xl font-bold'>Transaction</h2>
            <Label className='text-sm font-light'>View recently transaction</Label>
          </div>
          <Button variant='link' className='cursor-pointer'>
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent className={cn("gap-2 flex flex-col")}>
        {transactions.map((transaction, index) => (
          <TransactionItem
            type={transaction.type}
            amount={transaction.amount}
            date={transaction.date}
            key={index}
            name={transaction.name}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Transaction;
