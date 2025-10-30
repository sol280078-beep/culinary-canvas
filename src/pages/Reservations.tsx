import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Reservations() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    toast.success('Reservation submitted!', {
      description: `Thank you, ${data.name}. We've received your booking for ${data.guests} on ${format(date!, 'PPP')} at ${data.time}. A confirmation email has been sent to ${data.email}.`,
    });
    e.currentTarget.reset();
    setDate(new Date());
  };

  return (
    <div className='container mx-auto px-4 md:px-6 py-12'>
      <Card className='max-w-2xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Book a Table</CardTitle>
          <CardDescription>We would be delighted to host you. Please fill out the form below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input id='name' name='name' placeholder='e.g., Ada Lovelace' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input id='email' name='email' type='email' placeholder='e.g., ada@example.com' required />
              </div>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='guests'>Party Size</Label>
                <Select name='guests' defaultValue='2'>
                  <SelectTrigger id='guests'>
                    <SelectValue placeholder='Select party size' />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(8)].map((_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1} person{i > 0 ? 's' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='date'>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id='date'
                      variant={'outline'}
                      className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='time'>Time</Label>
                <Select name='time' defaultValue='19:00'>
                  <SelectTrigger id='time'>
                    <SelectValue placeholder='Select a time' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='17:00'>5:00 PM</SelectItem>
                    <SelectItem value='18:00'>6:00 PM</SelectItem>
                    <SelectItem value='19:00'>7:00 PM</SelectItem>
                    <SelectItem value='20:00'>8:00 PM</SelectItem>
                    <SelectItem value='21:00'>9:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='requests'>Special Requests (Optional)</Label>
              <Input id='requests' name='requests' placeholder='e.g., window seat, allergy information' />
            </div>

            <Button type='submit' className='w-full' size='lg'>Book My Table</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}