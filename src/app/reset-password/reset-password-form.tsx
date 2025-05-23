"use client"
import RoundedInput from "@/components/rounded-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { resetPassword } from "./actions";

const formSchema = z
  .object({
    oldPassword: z.string().min(1),
    newPassword: z
      .string()
      .min(8, "La password deve essere lunga almeno 8 caratteri")
      .regex(/[A-Z]/, "La password deve contenere almeno una lettera maiuscola")
      .regex(/[a-z]/, "La password deve contenere almeno una lettera minuscola")
      .regex(/\d/, "La password deve contenere almeno un numero")
      .regex(
        /[@$!%*?&]/,
        "La password deve contenere almeno un carattere speciale (@$!%*?&)"
      )
      .refine((password) => !/\s/.test(password), {
        message: "La password non può contenere spazi",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "La password non corrispondono",
    path: ["confirmPassword"], // This highlights the confirmPassword field in errors
  });

export default function ResetPasswordForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      confirmPassword: "",
      newPassword: "",
      oldPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await resetPassword(values);

    if (result.status === "error") {
      form.setError("root", { message: result.message });
    } else {
      router.push("/home");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RoundedInput placeholder="Vecchia Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RoundedInput placeholder="Nuova Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RoundedInput placeholder="Conferma Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       <Button
          className="bg-[#01377C] rounded-full py-[22px] px-13"
          type="submit"
          style={{
            boxShadow:
              "0px 4px 4px 0px #00000040, 0px -6px 4px 0px #00000040 inset",
          }}
        >
          <p className="text-[20px]/[20px]">Reset</p>
        </Button>
      </form>
    </Form>
  );
}
