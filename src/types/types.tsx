import React from "react";

export interface Projects {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
}

export interface ServiceCardProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
}
