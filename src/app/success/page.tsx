import BackButton from "@/components/back-button";
import PageAnimation from "@/components/page-animation";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Success() {
  const { width, height } = useWindowSize();

  return (
    <PageAnimation>
      <div className="h-full w-full flex items-center justify-center">
        <BackButton
          className="absolute left-[30px] top-[55px]"
          variant="blue"
        />
        <p className="font-extrabold text-[32px] w-fit text-center">
          STAI SPACCANDO
          <br />
          CONTINUA COSÌ!
        </p>
        <Confetti width={width} height={height - 76} recycle={false} />
      </div>
    </PageAnimation>
  );
}
