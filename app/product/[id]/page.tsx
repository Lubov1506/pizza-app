import React from "react";
export interface PageProps {}

export default function Page  ({ params: { id } }: { params: { id: string } })  {
  return <div> {id}</div>;
};
