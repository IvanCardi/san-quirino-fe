import BackButton from "@/components/back-button";
import FallingEmoji from "@/components/falling-emoji";
import PageAnimation from "@/components/page-animation";

export default function ChallengeWon() {
  return (
    <PageAnimation className="flex flex-col h-screen gap-6">
      <div className="h-full w-full flex items-center justify-center">
        <BackButton
          className="absolute left-[30px] top-[55px]"
          variant="blue"
        />
        <p className="font-extrabold text-[32px] w-fit text-center">
          HAI VINTO! 🚀
        </p>
        <FallingEmoji emoji={"🎉"} />
      </div>
    </PageAnimation>
  );
}
