import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R. F. Mandresy",
  description: "Créé par R. F. Mandresy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
    <head>
      {/* Préconnexion pour optimiser le chargement des polices */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Chargement des polices recommandées */}
      <link
        href="https://fonts.googleapis.com/css2?family=Garamond&family=Roboto+Slab&family=Albert+Sans&family=Montserrat&family=Lora&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="bg-ocean-950 text-white antialiased font-serif text-sm xs:text-md md:text-lg xl:text-xl">
    {children}
    </body>
    </html>
  );
}
