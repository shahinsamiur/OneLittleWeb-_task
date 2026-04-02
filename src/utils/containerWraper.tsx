import React from "react";

export function ContainerWraper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <section>{children}</section>
    </div>
  );
}
