export type FilterType = {
  place?: string;
  type?: string;
  price?: string;
};

export type ProjectData = {
  size: string;
  status: string;
  year: string;
  investor: string;
  builder: string;
  [key: string]: string; // Add index signature to allow string indexing
};
