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
  challenge?: {
    id: string;
    challenger: {
      id: string;
      firstName: string;
      lastName: string;
      office: { id: string; name: string };
    };
    opponent: {
      id: string;
      firstName: string;
      lastName: string;
      office: { id: string; name: string };
    };
    target: number;
    status: string;
  };
};
