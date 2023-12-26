import { TicketType } from '@/interfaces/ticketType';

export function getTicketTypes(
  event: string,
): Promise<
  { data: TicketType[]; status: number } | { data: []; status: number }
> {
  const ticketTypes: TicketType[] = [
    {
      _id: '001',
      name: 'Full Pass',
      description: 'Full Pass',
      lots: [
        {
          _id: '00011',
          name: '1° Lote',
          description: 'Full Pass',
          price: 100,
          grossPrice: 100,
          installments: 12,
          installmentsPrice: 120,
          tax: 10,
          quantity: {
            total: 100,
            available: 100,
            pending: 0,
            sold: 0,
            canceled: 0,
            reversed: 0,
            minPerOrder: 1,
            maxPerOrder: 10,
          },
        },
      ],
    },
    {
      _id: '002',
      name: 'Half Pass',
      description: 'Half Pass',
      lots: [
        {
          _id: '00021',
          name: '1° Lote',
          description: 'Half Pass',
          price: 50,
          grossPrice: 50,
          installments: 12,
          installmentsPrice: 60,
          tax: 10,
          quantity: {
            total: 30,
            available: 30,
            pending: 0,
            sold: 0,
            canceled: 0,
            reversed: 0,
            minPerOrder: 1,
            maxPerOrder: 10,
          },
        },
        {
          _id: '00022',
          name: '2° Lote',
          description: 'Half Pass',
          price: 60,
          grossPrice: 60,
          installments: 12,
          installmentsPrice: 72,
          tax: 10,
          quantity: {
            total: 50,
            available: 50,
            pending: 0,
            sold: 0,
            canceled: 0,
            reversed: 0,
            minPerOrder: 1,
            maxPerOrder: 10,
          },
        },
      ],
    },
  ];

  if (!ticketTypes) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [],
          status: 200,
        });
      }, 2000);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: ticketTypes,
        status: 200,
      });
    }, 2000);
  });
}
