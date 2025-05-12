import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/shadcn";
import { pagesPath } from "@/utils/path";
import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <form>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <a href='#' className='flex flex-col items-center gap-2 font-medium'>
              <div className='flex h-8 w-8 items-center justify-center rounded-md'>
                <DollarSign className='w-6 h-6 text-muted-foreground' strokeWidth={3} size={32} />
              </div>
              <h2 className='text-md font-bold font-code'>
                Monthly <span className='text-[#51D289]'>Budget</span>
              </h2>
            </a>
            <h1 className='text-xl font-bold'>Register account to track your money</h1>
            <div className='text-center text-sm'>
              If you have an account{" "}
              <Link to={pagesPath.login.url} className='underline underline-offset-4'>
                Sign in
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>FullName</Label>
              <Input id='email' type='text' placeholder='Phineas Tran' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Password</Label>
              <Input id='password' type='password' placeholder='password' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Re-Password</Label>
              <Input id='password' type='password' placeholder='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Register
            </Button>
          </div>
        </div>
      </form>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  '>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
};

export default SignUpForm;
