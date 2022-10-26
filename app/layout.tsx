import Container from "../components/Container";
import TopNav from "../components/TopNav";
import RootStyleRegistry from "./RootStyleRegistry";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <title>Your App</title>
      </head>
      <body>
        <RootStyleRegistry>
          <Container>
            <TopNav />
            {children}
          </Container>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
