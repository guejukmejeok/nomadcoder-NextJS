import Navigation from "../components/navigation";


export const metadata= {
  title:{
    template:"%s | Next",
    default : "Next"
  },
  description: "Hello"
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
