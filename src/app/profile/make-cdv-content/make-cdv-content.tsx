"use client";
import ActionButton from "@/components/action-button";
import DatePicker from "@/components/date-pricker";
import DeleteButton from "@/components/delete-button";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { makeCdv } from "./actions";

const formSchema = z.object({
  appointment: z.date({ message: "Inserisci una data valida" }),
});

export default function MakeCdvContent({
  actionId,
  closeDrawer,
}: {
  actionId: string;
  closeDrawer: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await makeCdv({
      appointment: data.appointment.toISOString(),
      actionId,
    });

    if (response.status === "ok") {
      closeDrawer();
    } else {
      form.setError("root", { message: response.message });
    }
  };

  const appointment = form.watch("appointment");

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Trasforma in CDV</DrawerTitle>
      </DrawerHeader>
      <div className="w-full px-5 pb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-6"
          >
            <FormField
              control={form.control}
              name="appointment"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Appuntamento</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
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
              <button type="submit" disabled={!appointment}>
                <ActionButton disabled={!appointment}>trasforma</ActionButton>
              </button>
              <DeleteButton onClick={() => {}} />
            </div>
          </form>
        </Form>
      </div>
    </DrawerContent>
  );
}
