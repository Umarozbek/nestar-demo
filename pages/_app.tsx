import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { light } from "../scss/MaterialTheme/index";
import "../scss/app.scss";
import "../scss/pc/main.scss"


export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createTheme(light));
  console.log("app.tsx");
/*
App.tsx da quyidagi global integratsiyalar amalga oshadi.
1. material UI
2. Redux, Socket.io
3. app routing global integration
*/
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
/* ̰
   Pages Routing                                      
  1. by default client component  => browserda qurilib ishga tushadi               
  2. severside rendinering mantiq document.tsx da    
  3. hook lar ishlatiladi  
  4. property  page  ishlaydi -> chunki browser da quriladi (brwoser console da korinadi )
  5. index.tsx run boladi 
  6. "_" belgi bilan boshlangan file lar client side renderingda amal qilmaydi. Misol; _document.tsx
  7. mobile device uchun ham yaratiladi (hook orqali user device malumotlarni oladi )
  8. action eventlar kop qollaniladi va qulay 
                    


    App Routing 
    1. by default server component  => serverda backenda qurilib ishga tushadi                                 
    2. client componentga otkazish uchun -> "use client"
    3. hook lar ishlamaydi (ishlatish  uchun client side rendering otazish kerak)
    4. property page ishlamaydi -> chunki backenda qurilyapti (terminalda korinadi)
    5. page.tsx run boladi
    6. action eventlar ishlamaydi -> chunki action (button_pressed client browserga oid unsur)



    Saas - Syntactically Awesome Stylesheet

*/