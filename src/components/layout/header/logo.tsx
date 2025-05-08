import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className='flex items-center'>
      <DollarSign className='h-6 text-muted-foreground w-fit' strokeWidth={3} size={32} />
      <h2 className='text-xl font-bold font-code'>
        Monthly<span className='text-money'>Budget</span>
      </h2>
    </Link>
  );
};

export default Logo;
