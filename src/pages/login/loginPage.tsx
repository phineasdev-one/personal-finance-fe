import { Wallet } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { pagesPath } from "@/utils/path";

const LoginPage = () => {
  return (
    <div className={cn("flex flex-col gap-6 h-screen mx-auto justify-center items-center")}>
      <form>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <a href='#' className='flex flex-col items-center gap-2 font-medium'>
              <div className='flex h-8 w-8 items-center justify-center rounded-md'>
                <Wallet className='size-6' />
              </div>
              <span className='sr-only'>Finance tracker.</span>
            </a>
            <h1 className='text-xl font-bold'>Welcome to Finance tracker.</h1>
            <div className='text-center text-sm'>
              Don&apos;t have an account?{" "}
              <Link to={pagesPath.register.url} className='underline underline-offset-4'>
                Sign up
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Password</Label>
              <Input id='password' type='password' placeholder='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
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

export default LoginPage;
