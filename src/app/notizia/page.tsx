import BackButton from "@/components/back-button";
import PageAnimation from "@/components/page-animation";
import NotiziaForm from "./notizia-form";

export default function Notizia() {
  return (
    <PageAnimation>
      <div className="pt-[55px] flex flex-col">
        <BackButton className="ml-[30px]" variant="blue" />
        <div className="h-[34px]" />
        <div className="flex flex-col m-auto w-fit items-center gap-2">
          <h1 className="uppercase text-[37px]/[37px] font-bold">
            nuova notizia
          </h1>
          <p className="text-[21px]/[21px] font-thin">Compila i campi</p>
          <div className="h-12" />
        </div>
        <div className="px-5">
          <NotiziaForm />
        </div>
      </div>
    </PageAnimation>
  );
}
