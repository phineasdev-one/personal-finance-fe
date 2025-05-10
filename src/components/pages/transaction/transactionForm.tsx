import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Plus, ShoppingCart, Utensils, Home, Droplets, Activity, Shirt, Heart, Users, CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/utils/shadcn";

const defaultCategories = [
  { name: "Food", icon: <Utensils size={16} /> },
  { name: "Clothing", icon: <Shirt size={16} /> },
  { name: "Shopping", icon: <ShoppingCart size={16} /> },
  { name: "Housing", icon: <Home size={16} /> },
  { name: "Electric", icon: <Activity size={16} /> },
  { name: "Water", icon: <Droplets size={16} /> },
  { name: "Social", icon: <Users size={16} /> },
  { name: "Health", icon: <Heart size={16} /> },
];

const TransactionForm = () => {
  const [open, setOpen] = useState(false);

  const [categories, setCategories] = useState(defaultCategories);
  const [newCategory, setNewCategory] = useState<string>("");

  const form = useForm();

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, { name: newCategory, icon: <Plus size={16} /> }]);
      setNewCategory("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='cursor-pointer'>
          <CirclePlus />
          Add new transaction
        </Button>
      </DialogTrigger>

      <DialogContent className='h-[90vh] overflow-y-auto max-w-md space-y-1'>
        <DialogHeader>
          <DialogTitle>Create Transaction</DialogTitle>
          <DialogDescription>Add income or expense to your wallet.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          {/* Date */}
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant='outline' className='w-full justify-start text-left'>
                        {field.value ? format(field.value, "PPP") : "Pick a date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar mode='single' selected={field.value} onSelect={field.onChange} initialFocus />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* Type */}
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <div className='flex gap-4 mt-2'>
                  <Button
                    type='button'
                    variant={field.value === "income" ? "default" : "outline"}
                    onClick={() => field.onChange("income")}
                  >
                    Income
                  </Button>
                  <Button
                    type='button'
                    variant={field.value === "expense" ? "default" : "outline"}
                    onClick={() => field.onChange("expense")}
                  >
                    Expense
                  </Button>
                </div>
              </FormItem>
            )}
          />

          {/* Amount */}
          <FormField
            control={form.control}
            name='amount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    value={field.value}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Note */}
          <FormField
            control={form.control}
            name='note'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Textarea placeholder='Optional note...' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <div className='grid grid-cols-3 gap-2 mt-2'>
                  {categories.map((cat, idx) => (
                    <Card
                      key={idx}
                      onClick={() => field.onChange(cat.name)}
                      className={cn(
                        "flex items-center gap-2 p-2 cursor-pointer",
                        field.value === cat.name && "border-primary border-2",
                      )}
                    >
                      {cat.icon}
                      <span className='text-sm'>{cat.name}</span>
                    </Card>
                  ))}
                </div>
              </FormItem>
            )}
          />

          {/* Add new category */}
          <div>
            <Label>Add New Category</Label>
            <div className='flex gap-2 mt-1'>
              <Input
                placeholder='e.g. Pets, Transport'
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <Button type='button' onClick={handleAddCategory}>
                Add
              </Button>
            </div>
          </div>

          <Button type='submit' className='w-full'>
            Save Transaction
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionForm;
