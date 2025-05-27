import PageAnimation from "@/components/page-animation";
import { LoaderCircle } from "lucide-react";
import Header from "./header";

export default function Office() {
  return (
    <PageAnimation className="flex flex-col h-full">
      <Header cover={""} logo={""} />
      <div className="min-h-2" />
      <div className="w-full flex justify-center">
        <LoaderCircle className="animate-spin" />
      </div>
    </PageAnimation>
  );
}
