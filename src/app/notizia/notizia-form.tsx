"use client";
import RoundedInput from "@/components/rounded-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createNews } from "./actions";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().min(1, "Inserisci il nome"),
  lastName: z.string().min(1, "Inserisci il congnome"),
  fullAddress: z.string().min(1, "Inserisci l'indirizzo"),
  phone: z.string().min(1, "Inserisci il numero di telefono"),
});

export default function NotiziaForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      fullAddress: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await createNews(values);

    if (result.status !== "error") {
      router.push("/success");
    } else {
      form.setError("root", { message: result.message });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-9 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RoundedInput placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RoundedInput placeholder="Cognome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RoundedInput placeholder="Indirizzo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RoundedInput placeholder="N° di telefono" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="min-h-[24px]" />
        <FormMessage
          {...(form.formState.errors.root && {
            children: form.formState.errors.root.message,
          })}
        />
        <div className="min-h-[24px]" />
        <div className="w-full flex justify-center">
          <Button
            className="bg-primary-green text-white font-bold text-[20px]/[20px] !w-[70%] uppercase rounded-[30px] !py-[14px] h-fit"
            type="submit"
            disabled={form.formState.isSubmitting}
            style={{
              background: " linear-gradient(270.95deg, #092179 0%, #5195C6 100%)",
              boxShadow:
                "0px 5px 5.8px 0px #8688F233, 0px -4px 4px 0px #00000040 inset",
            }}
          >
            Crea notizia
            {form.formState.isSubmitting && (
              <LoaderCircle className="animate-spin w-[12px] h-[12px]" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
