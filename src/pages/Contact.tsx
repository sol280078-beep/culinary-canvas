import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className='container mx-auto px-4 md:px-6 py-12'>
      <h1 className='text-4xl font-bold text-center mb-12'>Get In Touch</h1>
      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
          <Card>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center space-x-4'>
                <MapPin className='h-6 w-6 text-primary' />
                <span>123 Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className='flex items-center space-x-4'>
                <Phone className='h-6 w-6 text-primary' />
                <span>+234 801 234 5678</span>
              </div>
              <div className='flex items-center space-x-4'>
                <Mail className='h-6 w-6 text-primary' />
                <span>reservations@jollofjoy.ng</span>
              </div>
            </CardContent>
          </Card>
          <h2 className='text-2xl font-semibold mt-8 mb-4'>Opening Hours</h2>
          <Card>
            <CardContent className='p-6 space-y-2'>
              <div className='flex justify-between'><span>Tuesday - Thursday</span> <span>5pm - 10pm</span></div>
              <div className='flex justify-between'><span>Friday - Saturday</span> <span>5pm - 11pm</span></div>
              <div className='flex justify-between'><span>Sunday</span> <span>4pm - 9pm</span></div>
              <div className='flex justify-between'><span>Monday</span> <span>Closed</span></div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Our Location</h2>
          <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717912720938!2d3.424916014770451!3d6.429999995345919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b30b7a8a61d%3A0x25f4633074a38a7c!2sAdetokunbo%20Ademola%20Street%2C%20Victoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1676495536647!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}