import { Container } from '@/components/container';

export default function Home() {
  return (
    <main className='w-full min-h-screen flex items-center justify-center flex-col'>
      <Container>
        <h1 className='text-4xl font-bold tracking-wide uppercase'>
          Back<span className='text-primary-500'>stage</span>
        </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          fugiat eaque deleniti dolore sequi sapiente distinctio nobis vero
          asperiores enim rerum quisquam laborum, alias maxime eligendi corrupti
          delectus ad doloribus.
        </p>
      </Container>
    </main>
  );
}
