export type Challenge = {
  id: string;
  challenger: {
    id: string;
    firstName: string;
    lastName: string;
    points: number;
    avatar: string;
    office: { id: string; name: string };
  };
  opponent: {
    id: string;
    firstName: string;
    lastName: string;
    points: number;
    avatar: string;
    office: { id: string; name: string };
  };
  target: number;
  status: string;
};
