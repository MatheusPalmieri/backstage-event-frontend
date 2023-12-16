interface Session {
  startDate: string | Date;
  endDate: string | Date;
}

interface Resource {
  url: string;
}

export interface Location {
  code: string | number;
  address: string;
  country: string;
  state: string;
  city: string;
  street: string;
  number: string | number;
  coordinates: {
    lat: string | number;
    lng: string | number;
  };
}

export interface Event {
  _id: string;
  name: string;
  slug: string;
  description: string;
  sessions: Session[];
  resource: Resource;
  location: Location;
}
