import PageAnimation from "@/components/page-animation";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <PageAnimation>
      <div
        className="h-screen w-full flex flex-col"
        style={{
          backgroundImage: "url(/login-background.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[40%]"></div>
        <div
          className="h-[60%] w-full bg-white rounded-t-[28px] flex flex-col py-6 px-[30px] items-center gap-10"
          style={{ boxShadow: "0px -4px 4px 0px #00000040" }}
        >
          <p className="font-bold text-[40px]/[40px] text-[#022131] uppercase">
            Login
          </p>
          <LoginForm />
        </div>
      </div>
    </PageAnimation>
  );
}
