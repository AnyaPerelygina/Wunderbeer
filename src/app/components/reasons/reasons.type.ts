import { FC, SVGProps } from "react";

export type ReasonsType = {
  key: string;
  link: FC<SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  title: string;
  description?: string;
};

export type ReasonsProps = {
  reasonsList: ReasonsType[];
  className?: string;
};
