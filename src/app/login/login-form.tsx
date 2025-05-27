"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "./actions";

const formSchema = z.object({
  email: z.string().email("Inserire una mail corretta"),
  password: z.string().nonempty("Inserisci la password"),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await login(values.email, values.password);

    if (response.status === "ok") {
      router.push("/home");
    } else {
      if (response.message === "InvalidCredentials") {
        form.setError("root", { message: "Nome utente o password errati" });
        /*  form.setError("email", { message: "Nome utente o password errati" });
        form.setError("password", { message: "Nome utente o password errati" }); */
      } else {
        form.setError("root", { message: "Si è verificato un errore" });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7 w-full items-center"
      >
        <div className="flex flex-col gap-5 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <LoginInput {...field} placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <LoginInputPass {...field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <p className="uppercase underline text-[14px] text-[#05244F]">
          Password dimenticata
        </p> */}
        <FormMessage
          {...(form.formState.errors.root && {
            children: form.formState.errors.root.message,
          })}
        />
        <Button
          className="bg-primary-green text-white font-bold text-[20px]/[20px] w-full uppercase rounded-[30px] !py-[14px] h-fit"
          type="submit"
          disabled={form.formState.isSubmitting}
          style={{
            background: " linear-gradient(270.95deg, #092179 0%, #5195C6 100%)",
            boxShadow:
              "0px 5px 5.8px 0px #8688F233, 0px -4px 4px 0px #00000040 inset",
          }}
        >
          Accedi
          {form.formState.isSubmitting && <LoaderCircle className="animate-spin w-[12px] h-[12px]" />}
        </Button>
      </form>
    </Form>
  );
}

function LoginInput(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <Input
      {...props}
      className="border-none w-full h-fit rounded-full px-5 py-3 bg-[#F3F5F7]"
    />
  );
}

function LoginInputPass(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPass ? "text" : "password"}
        className="border-none w-full h-fit rounded-full px-5 py-3 bg-[#F3F5F7]"
      />
      <button
        type="button"
        className="absolute right-5 top-4 text-gray-500"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? (
          <EyeClosed className="w-5 h-5 stroke-black" />
        ) : (
          <Eye className="w-5 h-5 stroke-black" />
        )}
      </button>
    </div>
  );
}
