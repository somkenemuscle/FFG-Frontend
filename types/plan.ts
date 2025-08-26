
export interface Plan {
  _id: string;
  name: string;
  type: string;
  durationInMonths: number;
  membershipPlan: MembershipPlan;
  price: number;
    status: string;
  description: string;
  createdAt: string;
}

export interface MembershipPlan {
  _id: string;
  name: string;
  type: string; // e.g. "half-year"
  durationInMonths: number;
  price: number;
  description:string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
