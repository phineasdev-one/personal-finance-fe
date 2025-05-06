import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className='flex items-center gap-2.5'>
      <Wallet className='w-6 h-6 text-muted-foreground' strokeWidth={2} />
      <h2 className='text-md font-bold font-code'>Finance Tracker</h2>
    </Link>
  );
};

export default Logo;
