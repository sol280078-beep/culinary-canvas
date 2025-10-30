import * as React from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Events() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    toast.success('Event Inquiry Submitted!', {
      description: `Thank you, ${data.name}. We've received your inquiry for a ${data.event_type} and will be in touch shortly.`,
    });
    e.currentTarget.reset();
  };

  return (
    <div className='container mx-auto px-4 md:px-6 py-12 grid md:grid-cols-2 gap-12 items-center'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Host Your Event With Us</h1>
        <p className='text-muted-foreground text-lg mb-6'>
          From corporate functions to private celebrations, our restaurant provides a unique and memorable setting. Let us help you create an unforgettable experience with authentic cuisine and warm hospitality.
        </p>
        <img 
          src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/event-space-qb5m63y-1761842496428.webp' 
          alt='Private event space' 
          className='rounded-lg shadow-xl w-full h-auto object-cover' 
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Event Booking Inquiry</CardTitle>
          <CardDescription>Fill out the form below and our event coordinator will contact you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input id='name' name='name' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email' required />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='event_type'>Type of Event</Label>
              <Select name='event_type' defaultValue='corporate'>
                <SelectTrigger id='event_type'>
                  <SelectValue placeholder='Select event type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='corporate'>Corporate Function</SelectItem>
                  <SelectItem value='birthday'>Birthday Party</SelectItem>
                  <SelectItem value='anniversary'>Anniversary</SelectItem>
                  <SelectItem value='other'>Other Private Gathering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='guests'>Number of Guests</Label>
                <Input id='guests' name='guests' type='number' min='10' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='date'>Preferred Date</Label>
                <Input id='date' name='date' type='date' required />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='details'>Additional Details</Label>
              <Input id='details' name='details' placeholder='Tell us more about your event...' />
            </div>
            <Button type='submit' className='w-full'>Send Inquiry</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}