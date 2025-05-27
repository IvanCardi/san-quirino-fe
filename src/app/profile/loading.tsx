import PageAnimation from "@/components/page-animation";
import { LoaderCircle } from "lucide-react";
import Header from "./header";

export default function LoadingProfile() {
  return (
    <PageAnimation className="flex flex-col h-full gap-6">
      <div className="h-full flex flex-col">
        <Header photo={""} avatars={[]} itsMe={false} nickname={""} />
        <div className="flex w-full justify-center">
          <LoaderCircle className="animate-spin" />
        </div>
      </div>
    </PageAnimation>
  );
}
