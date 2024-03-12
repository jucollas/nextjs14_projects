import "@/app/ui/global.css"; // styles
import { inter } from '@/app/ui/fonts'; // fonts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="py-10 flex justify-center items-center">
          Con 💟 para mi.
        </footer>
      </body>
    </html>
  );
}
