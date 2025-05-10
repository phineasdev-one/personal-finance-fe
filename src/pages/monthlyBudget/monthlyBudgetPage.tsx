import { MonthlyCard } from "@/components/pages";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const MonthlyBudgetPage = () => {
  return (
    <div className='flex flex-col gap-6 pb-6'>
      <div className='pt-6 flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-bold'>Monthly activities</h2>
          <Label className='text-sm font-light'>Monitor your monthly activities</Label>
        </div>

        <Select>
          <SelectTrigger className='w-[100px]'>
            <SelectValue placeholder='2025' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='2026'>2026</SelectItem>
            <SelectItem value='2025'>2025</SelectItem>
            <SelectItem value='2024'>2024</SelectItem>
            <SelectItem value='2023'>2023</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div>
        <MonthlyCard month={"May"} rangeTime={"01/05 - 30/05"} totalIncome={124242} totalExpense={1000} />
        <MonthlyCard month={"May"} rangeTime={"01/05 - 30/05"} totalIncome={124242} totalExpense={1000} />
        <MonthlyCard month={"May"} rangeTime={"01/05 - 30/05"} totalIncome={124242} totalExpense={1000} />
        <MonthlyCard month={"May"} rangeTime={"01/05 - 30/05"} totalIncome={124242} totalExpense={1000} />
        <MonthlyCard month={"May"} rangeTime={"01/05 - 30/05"} totalIncome={124242} totalExpense={1000} />
      </div>
    </div>
  );
};

export default MonthlyBudgetPage;
