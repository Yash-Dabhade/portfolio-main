import "./css/globals.scss";

export const metadata = {
  title: "Yash Dabhade | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
