import ResetPasswordForm from "./reset-password-form";

export default function ResetPassword() {
  return (
    <div className="flex flex-col justify-center h-screen gap-20">
      <p className="uppercase text-[37px]/[37px] font-bold text-center">
        Cambia la tua password
      </p>
      <div className="px-5">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
