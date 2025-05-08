import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className='flex items-center gap-2.5'>
      <DollarSign className='w-6 h-6 text-muted-foreground' strokeWidth={3} size={32} />
      <h2 className='text-xl font-bold font-code'>
        Monthly<span className='text-[#51D289]'>Budget</span>
      </h2>
    </Link>
  );
};

export default Logo;
