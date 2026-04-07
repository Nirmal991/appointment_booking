export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface IOrganization {
  id: string;
  name: string;
  slug: string;
  timezone: string;
  plan: "FREE" | "PRO";
  subscriptionStatus: "ACTIVE" | "INACTIVE" | "CANCELLED";
}

export interface IService {
  id: string;
  title: string;
  description: string;
  serviceType: "ONLINE" | "OFFLINE";
  durationInMinutes: number;
  price: number;
  currency: string;
  locationAddress?: string;
  isActive: boolean;
}