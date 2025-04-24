"use client";
import ActionButton from "@/components/action-button";
import DeleteButton from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
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
        <DrawerTitle className="!text-[30px]">Trasforma in CDV</DrawerTitle>
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
                  <Popover modal={true}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Scegli la data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent
                      className="w-auto p-0 z-[100]"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(val) => {
                          field.onChange(val);
                        }}
                        disabled={(date) => date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormMessage
              {...(form.formState.errors.root && {
                children: form.formState.errors.root.message,
              })}
            />
            <div className="w-full flex justify-center gap-3">
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
