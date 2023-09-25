"use client";

import { QueryClient, Quer"@tanstack/react-query"yClientProvider } from ;

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;