import "@/styles/globals.css";
import { store } from "../app/store/index";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export type NextPageWithLayout<p = {}, IP = p> = NextPage<p, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </ThemeProvider>
  );
}
