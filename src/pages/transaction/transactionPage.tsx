import { ExistingBudgets, FixedExpenses, OverviewStats, RecentlyExpenses, TransactionForm } from "@/components/pages";
import { Label } from "@/components/ui/label";

const TransactionPage = () => {
  return (
    <div className='flex flex-col gap-6 pb-6'>
      <div className='pt-6 flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-bold'>Transactions for May</h2>
          <Label className='text-sm font-light'>See what’s flowing in and out this month</Label>
        </div>
        <TransactionForm />
      </div>

      <OverviewStats expense={10000} income={20000} />

      <div className='grid grid-cols-2 gap-4'>
        <RecentlyExpenses />
        <FixedExpenses />
      </div>

      <ExistingBudgets />
    </div>
  );
};

export default TransactionPage;
