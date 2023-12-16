interface ImageProps {
  url: string | null;
  alt: string;
}

export const Image = ({ url, alt }: ImageProps) => {
  return (
    <section
      className={`w-full aspect-video rounded-b-xl bg-gray-400 ${
        !url && 'animate-pulse'
      }`}
    >
      {url ? (
        <img src={url} alt={alt} className='rounded-b-xl' />
      ) : (
        <div className=' w-full h-full flex items-center justify-center'>
          <h4 className='text-2xl font-semibold tracking-wide'>
            Evento sem imagem
          </h4>
        </div>
      )}
    </section>
  );
};
