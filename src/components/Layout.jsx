import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";


const Layout = ({ children }) => {
  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 40px",
      position: 'relative'
    }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
export default Layout;