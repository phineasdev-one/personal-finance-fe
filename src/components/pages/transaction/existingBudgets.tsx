import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CirclePlus } from "lucide-react";

const ExistingBudgets = () => {
  const budgets = [
    {
      name: "Groceries",
      budgeted: 1200,
      spent: 9.46,
      color: "red",
    },
    {
      name: "Personal",
      budgeted: 200,
      spent: 0,
      color: "amber",
    },
  ];

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>Existing Budgets</h3>
        <Button variant='outline' className='cursor-pointer'>
          <CirclePlus /> Add Budget
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        {budgets.map((b, i) => {
          const percent = (b.spent / b.budgeted) * 100;
          return (
            <Card key={i} className='border'>
              <CardContent className='p-4'>
                <div className='flex justify-between items-center'>
                  <CardTitle className={`text-black-600`}>{b.name}</CardTitle>
                  <span className='text-sm font-medium'>${b.budgeted.toFixed(2)} Budgeted</span>
                </div>
                <Progress value={percent} className='my-3' />
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>${b.spent.toFixed(2)} spent</span>
                  <span className='text-muted-foreground'>${(b.budgeted - b.spent).toFixed(2)} remaining</span>
                </div>
                <Button variant='outline' size='sm' className={`mt-4 text-red-700 border-red-500`}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ExistingBudgets;
