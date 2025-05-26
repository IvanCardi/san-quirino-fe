import ActionButton from "@/components/action-button";
import RoundedInput from "@/components/rounded-input";
import {
    Form,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changeNickname } from "./actions";

const formSchema = z.object({
  nickname: z.string().nonempty("Inserisci un nickname"),
});

export default function EditNicknameForm({
  nickname: currentNickname,
  closeDrawer,
}: {
  nickname: string;
  closeDrawer: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: currentNickname,
    },
  });

  const nickname = form.watch("nickname");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await changeNickname(data.nickname);

    if (response.status === "ok") {
      closeDrawer();
    } else {
      form.setError("root", { message: response.message });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-6"
      >
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <RoundedInput placeholder="Nickname" type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormMessage
          {...(form.formState.errors.root && {
            children: form.formState.errors.root.message,
          })}
        />
        <div className="w-full flex justify-center gap-2">
          <button
            type="submit"
            disabled={!nickname || nickname === currentNickname}
          >
            <ActionButton disabled={!nickname || nickname === currentNickname}>
              Modifica
            </ActionButton>
          </button>
        </div>
      </form>
    </Form>
  );
}
