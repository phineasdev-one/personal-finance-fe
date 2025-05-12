import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/shadcn";
import { TransactionType } from "@/types/transaction";
import { formatDateTimeStamp } from "@/utils/dateTime";
import { formatPrice } from "@/utils/price";
import { TrendingDown, TrendingUp } from "lucide-react";
import { FC } from "react";

type Props = {
  type: TransactionType;
  amount: number;
  date: string;
  name: string;
};

const TransactionItem: FC<Props> = ({ amount, date, type, name }) => {
  const outcomeTransaction = type === TransactionType.IN;

  return (
    <Card className={cn("p-1")}>
      <CardHeader className='flex justify-between items-center p-1.5 rounded-md'>
        <div className='flex flex-col gap-1 text-sm'>
          <Label className='amount'>{name}</Label>
          <div className='text-sm text-muted-foreground'>{formatDateTimeStamp(date)}</div>
        </div>
        <div>
          <div
            className={cn(
              `border rounded-md gap-2 px-2 flex ${outcomeTransaction ? "bg-[#d8eee1]" : "bg-[#f5b0b0]"} ${outcomeTransaction ? "text-money" : "text-[#f20707]"}`,
            )}
          >
            <Label className='amount'>
              {outcomeTransaction ? "+" : "-"} {formatPrice(amount)}
            </Label>

            {outcomeTransaction ? (
              <TrendingUp size={24} color='#51D289' strokeWidth={2} />
            ) : (
              <TrendingDown size={24} color='#f20707' strokeWidth={2} />
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TransactionItem;
