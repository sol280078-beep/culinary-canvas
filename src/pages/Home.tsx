import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <section className='relative h-[600px] w-full overflow-hidden'>
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/hero-image-aa5wrzt-1761842427362.webp' alt='Jollof Rice' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4'>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-6xl font-bold mb-4'
          >
            Savor the Taste of West Africa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-lg md:text-xl mb-8 max-w-2xl'
          >
            Experience the vibrant flavors and rich culture of West African cuisine at Jollof Joy. Every dish is a celebration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex space-x-4'
          >
            <Button asChild size='lg' className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              <Link to='/menu'>View Menu</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-black'>
              <Link to='/reservations'>Book a Table</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}