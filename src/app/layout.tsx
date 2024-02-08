import "@/styles/globals.css";
import Navbar from "@/components/navbar/index";
// import { TungstenBold } from "@/assets/fonts/font";
import { Oswald } from "next/font/google";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";

const font = Oswald({
    weight: ["200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={clsx(font.className, "scroll-smooth")}>
            <head>
                <meta
                    name="description"
                    content="Hi, I'm a frontend web developer based in Indonesia."
                />
                <meta
                    name="description"
                    content="the best website in the world"
                />
            </head>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="w-full min-h-screen bg-valorantWhite container-none">
                        <Navbar />

                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
