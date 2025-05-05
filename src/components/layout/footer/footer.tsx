import { Wallet } from "lucide-react";

const Footer = () => {
  return (
    <footer className='border-t w-full h-16'>
      <div className='container-fluid flex items-center justify-center h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4 w-full'>
        <div className='flex items-center gap-3 justify-center'>
          <Wallet className='sm:block hidden w-5 h-5 text-muted-foreground' />
          <p className='text-center'>The source code build by Phineas Tran - 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
