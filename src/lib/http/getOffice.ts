import { Office } from "../models/office";

export const getOffice = async (officeId: string): Promise<Office> => {
  const offices = await fetch(
    `${process.env.BE_BASE_URL}/offices/${officeId}`,
    {
      next: { tags: ["office"] },
    }
  );

  return await offices.json();
};
