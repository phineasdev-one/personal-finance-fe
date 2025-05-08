import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/price";
import { TrendingUpIcon } from "lucide-react";
import { FC, JSX } from "react";

type Props = {
  title: string;
  description: string;
  amount: number;
  icon: JSX.Element;
};

const Stats: FC<Props> = ({ amount, description, icon, title }) => {
  return (
    <Card className={cn("@container/card gap-2")}>
      <CardHeader className='relative'>
        <CardDescription>{title}</CardDescription>
        <CardTitle className='@[250px]/card:text-2xl text-xl font-semibold tabular-nums'>
          {formatPrice(amount, { hasCurrencySymbol: true })}
        </CardTitle>
        <div className='absolute right-4 top-2'>
          <div className='flex gap-1 rounded-lg text-xs'>{icon}</div>
        </div>
      </CardHeader>
      <CardFooter className='flex-col items-start gap-1 text-sm'>
        <div className='line-clamp-1 flex gap-2 font-medium'>
          Trending up this month <TrendingUpIcon className='size-4' />
        </div>
        <div className='text-muted-foreground'>{description}</div>
      </CardFooter>
    </Card>
  );
};

export default Stats;
