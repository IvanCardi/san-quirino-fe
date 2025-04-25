import { Challenge } from "./challenge";

export type Agent = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  type: string;
  office: { id: string; name: string; address: string };
  actions: {
    id: string;
    fullName: string;
    phone: string;
    address: string;
    type: string;
  }[];
  points: number;
  overallRank: number;
  officeRank: number;
  avatar: string;
  challenge?: Challenge;
};
