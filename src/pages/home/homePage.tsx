import { FinancialOverview, Stats, Transaction, TransactionChart } from "@/components/pages";
import { Label } from "@/components/ui/label";
import { BadgeDollarSign, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";

const stats = [
  {
    title: "Total Balance",
    value: 91000,
    icon: <BadgeDollarSign className='text-muted-foreground' size={32} strokeWidth={1} />,
    desc: "Remaining after income and expenses",
  },
  {
    title: "Total Income",
    value: 98000,
    icon: <BanknoteArrowUp className='text-muted-foreground' size={32} strokeWidth={1} />,
    desc: "All recorded earnings",
  },
  {
    title: "Total Expenses",
    value: 71000,
    icon: <BanknoteArrowDown className='text-muted-foreground' size={32} strokeWidth={1} />,
    desc: "All outgoing payments",
  },
];

const HomePage = () => {
  return (
    <div className='flex flex-col gap-6 pb-6'>
      <div className='pt-6'>
        <h2 className='text-2xl font-bold'>Dashboard</h2>
        <Label className='text-sm font-light'>Monitor your financial activities</Label>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {stats.map((stat, index) => (
          <Stats title={stat.title} description={stat.desc} amount={stat.value} icon={stat.icon} key={index} />
        ))}
      </div>

      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='sm:flex-1'>
          <Transaction />
        </div>
        <div className='sm:flex-1'>
          <FinancialOverview />
        </div>
      </div>

      <TransactionChart />
    </div>
  );
};

export default HomePage;
