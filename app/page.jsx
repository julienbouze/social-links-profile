import Image from 'next/image';
import Avatar from 'public/julien.jpg';
import Network from '@/components/Network';
import Attribution from '@/components/Attribution';

export default function Home() {
  return (
    <main className='bg-offBlack text-white text-sm w-full min-h-screen flex flex-col items-center justify-between md:justify-center p-8'>
      <div className='flex flex-col gap-2 bg-darkGrey max-w-96 md:w-96 p-8 rounded-lg'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <Image src={Avatar} className='rounded-full w-24' alt='My avatar'/>
            <div>
              <h1 className='font-semibold text-lg'>Julien Bouze</h1>
              <p className='text-customGreen'>Marseille, France</p>
            </div>
          </div>
          <p className='italic opacity-80'>&ldquo;Front-end developer and dog lover.&rdquo;</p>
        </div>
        <div className='flex flex-col gap-2 p-4 rounded-lg'>
          <Network url='https://github.com/julienbouze/' name='Github'></Network>
          <Network url='https://www.frontendmentor.io/profile/julienbouze' name='Frontend Mentor'></Network>
          <Network url='https://www.linkedin.com/in/julien-bouze/' name='LinkedIn'></Network>
          <Network url='https://www.malt.fr/profile/julienbouze' name='Malt'></Network>
          <Network url='https://www.upwork.com/freelancers/~0169a390a476bcf10e?mp_source=share' name='Upwork'></Network>
        </div>
      </div>
      <Attribution></Attribution>
    </main>
  );
}
