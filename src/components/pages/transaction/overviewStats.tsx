import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { FC } from "react";

type Props = {
  income: number;
  expense: number;
};

const OverviewStats: FC<Props> = ({ expense, income }) => {
  const net = income - expense;

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='p-4 rounded-xl border shadow-sm flex items-center gap-4'>
        <div className='p-3 rounded-full bg-muted'>
          <ArrowDownCircle className='w-6 h-6 text-muted-foreground' />
        </div>
        <div>
          <h4 className='text-sm font-medium text-muted-foreground'>Total Income</h4>
          <p className='text-xl font-semibold'>{income.toLocaleString()}₫</p>
        </div>
      </div>

      <div className='p-4 rounded-xl border shadow-sm flex items-center gap-4'>
        <div className='p-3 rounded-full bg-muted'>
          <ArrowUpCircle className='w-6 h-6 text-muted-foreground' />
        </div>
        <div>
          <h4 className='text-sm font-medium text-muted-foreground'>Total Expenses</h4>
          <p className='text-xl font-semibold'>{expense.toLocaleString()}₫</p>
        </div>
      </div>

      <div className='p-4 rounded-xl border shadow-sm flex items-center gap-4'>
        <div className='p-3 rounded-full bg-muted'>
          <Wallet className='w-6 h-6 text-muted-foreground' />
        </div>
        <div>
          <h4 className='text-sm font-medium text-muted-foreground'>Net Balance</h4>
          <p className='text-xl font-semibold'>{net.toLocaleString()}₫</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
