import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

import DataContextProvider from "../Context/DataContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataContextProvider>
        <ChakraProvider>
       
          <Component {...pageProps} />
        </ChakraProvider>
      </DataContextProvider>
    </>
  );
}
