export type Animal="dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet{
    id: number;
    name: string;
    animal: Animal;
    description: string;
    breed: string;
    images: string[];
    city: string;
    state: string;
}

export interface BeerApiResponse{
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets:Pet[];
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Country {
  area: number;
  independent: boolean;
  name: string;
  region: string;
}