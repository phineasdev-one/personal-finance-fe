import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, HandCoins, Wallet } from "lucide-react";

const stats = [
  {
    title: "Total Balance",
    value: "$91,100",
    icon: <CreditCard className='text-white' size={24} />,
    bgColor: "bg-violet-500",
    desc: "Overall total balance",
  },
  {
    title: "Total Income",
    value: "$98,200",
    icon: <Wallet className='text-white' size={24} />,
    bgColor: "bg-orange-500",
    desc: "Overall total income",
  },
  {
    title: "Total Expenses",
    value: "$7,100",
    icon: <HandCoins className='text-white' size={24} />,
    bgColor: "bg-red-500",
    desc: "Overall total expenses",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className='pt-6'>
        <h2 className='text-xl font-semibold'>Dashboard</h2>
        <span className='text-sm'>Monitor your financial activities</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
        {stats.map((stat, index) => (
          <Card key={index} className='flex items-center p-4 rounded-xl flex-row'>
            <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>{stat.icon}</div>
            <CardContent className='p-0'>
              <p className='text-sm text-gray-500'>{stat.title}</p>
              <p className='text-xl font-semibold'>{stat.value}</p>
              <span className='text-sm text-gray-500'>{stat.desc}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='overview'>
        <div className='recent-transaction'></div>
        <div className='sumary'></div>
      </div>
    </div>
  );
};

export default HomePage;
