import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/utils/price";
import { cn } from "@/utils/shadcn";
import { TrendingUp } from "lucide-react";
import { FC } from "react";

type Props = {
  month: string;
  rangeTime: string;
  totalIncome: number;
  totalExpense: number;
};

const MonthlyCard: FC<Props> = ({ month, rangeTime, totalExpense, totalIncome }) => {
  return (
    <Card className={cn("p-1")}>
      <CardHeader className='flex justify-between items-center p-1.5 rounded-md'>
        <div className='flex flex-col gap-1 text-sm'>
          <Label className='amount'>{month}</Label>
          <div className='text-sm text-muted-foreground'>Time: {rangeTime}</div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className={cn(`border rounded-md gap-2 px-2 flex`)}>
            <Label className='amount'>Total income {formatPrice(totalIncome, { hasCurrencySymbol: true })}</Label>

            <TrendingUp size={24} color='#51D289' strokeWidth={2} />
          </div>
          <div className={cn(`border rounded-md gap-2 px-2 flex`)}>
            <Label className='amount'>Total expense: {formatPrice(totalExpense, { hasCurrencySymbol: true })}</Label>

            <TrendingUp size={24} color='#51D289' strokeWidth={2} />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default MonthlyCard;
