import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Jollof Rice',
    description: 'The quintessential West African one-pot rice dish, smoky and rich.',
    price: '15.99',
    category: 'Main Courses',
    dietary: [],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/menu-jollof-1z00qr8-1761842436224.webp',
  },
  {
    name: 'Suya',
    description: 'Spicy grilled beef skewers, a popular Nigerian street food.',
    price: '12.50',
    category: 'Appetizers',
    dietary: ['Gluten-Free'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/menu-suya-k32qvvp-1761842445428.webp',
  },
  {
    name: 'Egusi Soup',
    description: 'A rich and savory soup made from ground melon seeds, vegetables, and meat.',
    price: '18.00',
    category: 'Main Courses',
    dietary: ['Gluten-Free'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/menu-egusi-0w0skgi-1761842452960.webp',
  },
  {
    name: 'Zobo Drink',
    description: 'A refreshing hibiscus iced tea with ginger and pineapple.',
    price: '5.00',
    category: 'Drinks',
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/menu-zobo-rf7wbld-1761842461431.webp',
  },
];

const filters = ['All', 'Appetizers', 'Main Courses', 'Drinks', 'Vegetarian', 'Vegan', 'Gluten-Free'];

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = menuItems.filter(item => {
    if (activeFilter === 'All') return true;
    if (item.category === activeFilter) return true;
    if (item.dietary.includes(activeFilter)) return true;
    return false;
  });

  return (
    <div className='container mx-auto px-4 md:px-6 py-12'>
      <h1 className='text-4xl font-bold text-center mb-8'>Our Menu</h1>
      <div className='flex justify-center flex-wrap gap-2 mb-8'>
        {filters.map(filter => (
          <Button 
            key={filter} 
            variant={activeFilter === filter ? 'default' : 'outline'}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <img src={item.image} alt={item.name} className='rounded-t-lg h-48 w-full object-cover' />
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-2'>{item.name}</CardTitle>
                <p className='text-muted-foreground mb-4'>{item.description}</p>
                <div className='flex justify-between items-center'>
                  <span className='font-bold text-lg'>${item.price}</span>
                  <div className='flex space-x-2'>
                    {item.dietary.map(d => (
                      <span key={d} className='text-xs bg-secondary text-secondary-foreground p-1 rounded-md'>{d}</span>
                    ))}
                   </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}