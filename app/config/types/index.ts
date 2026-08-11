export interface INavlinks {
  href: string;
  label: string;
}

export interface ICardStrategy {
  title: string
  description: string
}

export enum ServicePlan {
  Start = "Start",
  Vibranium = "Vibranium",
  Adamantium = "Adamantium",
}

export interface IItemService {
  plan: ServicePlan;
  promotion?: string;
  color: string;
  items: string[];
  price: number;
  recommend: boolean;
}

export interface IOurServices {
  type: string;
  services: IItemService[]
}
