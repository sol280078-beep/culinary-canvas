import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amara Nwosu',
    review: 'An unforgettable experience! The Jollof Rice was the best I have ever tasted, and the atmosphere was so warm and welcoming. I will be back for sure!',
    rating: 5,
  },
  {
    name: 'David Adeleke',
    review: 'Jollof Joy is a gem. The Suya was perfectly spiced, and the Zobo drink was incredibly refreshing. It felt like a taste of home. Highly recommended for anyone craving authentic Nigerian food.',
    rating: 5,
  },
  {
    name: 'Fatima Bello',
    review: 'I came here for a birthday dinner and was blown away. The staff was attentive, the food was divine (get the Egusi!), and the decor is beautiful. A perfect spot for any celebration.',
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className='flex text-primary'>
    {[...Array(5)].map((_, i) => (
      <Star key={i} fill={i < rating ? 'currentColor' : 'none'} className='h-5 w-5' />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <div className='bg-secondary py-12'>
      <div className='container mx-auto px-4 md:px-6'>
        <h1 className='text-4xl font-bold text-center mb-12 text-secondary-foreground'>What Our Customers Say</h1>
        <div className='grid md:grid-cols-3 gap-8'>
          {reviews.map((review) => (
            <Card key={review.name}>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <div className='flex-grow'>
                    <p className='font-bold text-lg'>{review.name}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className='text-muted-foreground'>'{review.review}'</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}