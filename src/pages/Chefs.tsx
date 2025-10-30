import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const chefs = [
  {
    name: 'Chef Adebayo a', 
    bio: 'With over 15 years of experience in prestigious kitchens from Lagos to London, Chef Adebayo brings a modern twist to classic West African dishes. His passion for fresh, local ingredients is the heart of Jollof Joy.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/chef-1-r7rpfak-1761842469801.webp',
  },
  {
    name: 'Chef Ifeoma a', 
    bio: 'Chef Ifeoma is a master of Nigerian soul food. Her recipes, passed down through generations, are the secret behind our most beloved and authentic dishes. She specializes in slow-cooked soups and stews.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/01ee6f85-b238-41ee-a90e-c083485363d5/chef-2-lcezj9x-1761842477606.webp',
  },
];

export default function Chefs() {
  return (
    <div className='container mx-auto px-4 md:px-6 py-12'>
      <h1 className='text-4xl font-bold text-center mb-12'>Meet Our Culinary Artists</h1>
      <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
        {chefs.map((chef, index) => (
          <motion.div
            key={chef.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className='overflow-hidden text-center'>
              <CardHeader className='p-0'>
                <img src={chef.image} alt={chef.name} className='w-full h-80 object-cover' />
              </CardHeader>
              <CardContent className='p-6'>
                <CardTitle className='text-2xl mb-2'>{chef.name}</CardTitle>
                <p className='text-muted-foreground'>{chef.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}