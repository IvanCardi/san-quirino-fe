import { Office } from "../models/office";

export const getOffices = async (): Promise<Office[]> => {
  const offices = await fetch(`${process.env.BE_BASE_URL}/offices`, {
    next: { tags: ["offices"], revalidate: 0 },
  });

  return (await offices.json()) as Office[];
};
