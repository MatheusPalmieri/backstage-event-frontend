import { Divider } from '@/components/Divider';
import { TitleIcon } from '@/components/Titles/TitleIcon';
import { Location } from '@/interfaces/event';
import {
  IconMapPin,
  IconMessageReport,
  IconTextCaption,
} from '@tabler/icons-react';

interface ContentProps {
  description: string | TrustedHTML;
  location: Location;
}

export const Content = ({ description, location }: ContentProps) => {
  const { address, street, number, city, state, country } = location;

  return (
    <section className='p-4'>
      <article>
        <TitleIcon Icon={IconTextCaption}>Descrição</TitleIcon>

        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className='text-secondary-50'
        />
      </article>

      <Divider />

      <article>
        <TitleIcon Icon={IconMapPin}>Localização</TitleIcon>

        <div className='text-secondary-50'>
          <p>{address}</p>
          <p>
            {street} - n° {number}
          </p>
          <p>{city}</p>
          <p>
            {state} - {country}
          </p>
        </div>

        <button>Ver no Mapa</button>
      </article>

      <Divider />

      <article>
        <TitleIcon Icon={IconMessageReport}>Política de cancelamento</TitleIcon>

        <p>
          Caso você queira exercer seu direito de arrependimento, nos termos do
          Código de Defesa do Consumidor, o reembolso do valor do ingresso,
          descontadas as taxas de serviço da BACKSTAGE, estará garantido e
          deverá ser efetuado pelo Organizador desde que a solicitação seja
          efetuada no prazo máximo de até 7 (sete) dias a contar da data da
          compra e com antecedência mínima de 48 (quarenta e oito) horas antes
          da realização do evento.
        </p>
      </article>
    </section>
  );
};
