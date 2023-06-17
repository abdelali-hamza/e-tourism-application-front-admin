import "@/styles/globals.css";
import Signin from "@/Components/Signin";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-screen min-h-screen">
      <Signin />
    </div>
  );
}
