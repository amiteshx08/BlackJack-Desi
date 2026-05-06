import { Header } from "./Header";

export const Body = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/khaatiya_image1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen"
    >
        <Header/>
    </div>
  );
};
