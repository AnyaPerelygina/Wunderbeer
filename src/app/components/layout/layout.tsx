import React from 'react';
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <React.Fragment>
      <main>
        {children}
      </main>
    </React.Fragment>
  );
}
