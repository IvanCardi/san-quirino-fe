export type Office = {
  id: string;
  name: string;
  street: string;
  number: string;
  city: string;
  province: string;
  zipCode: string;
  manager?: {
    id: string;
    name: string;
  };
};

export function getOfficeAddress(office: Office): string {
  return `${office.street} ${office.number}, ${office.city}, ${office.province}, ${office.zipCode}`;
}
