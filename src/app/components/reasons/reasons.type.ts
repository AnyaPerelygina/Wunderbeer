export type ReasonsType = {
  link: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description?: string;
};

export type ReasonsProps = {
  reasonsList: ReasonsType[];
};
