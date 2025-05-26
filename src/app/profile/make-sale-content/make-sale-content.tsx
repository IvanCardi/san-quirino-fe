"use client";
import ActionButton from "@/components/action-button";
import DatePicker from "@/components/date-pricker";
import DiscardButton from "@/components/discard-button";
import RoundedInput from "@/components/rounded-input";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { makeSale } from "./actions";

const formSchema = z.object({
  saleDate: z.date({ message: "Inserisci una data valida" }),
  price: z
    .preprocess(
      (a) => (a ? parseInt(z.string().parse(a), 10) : undefined),
      z.any()
    )
    .optional(),
  commission: z
    .preprocess(
      (a) => (a ? parseInt(z.string().parse(a), 10) : undefined),
      z.any()
    )
    .optional(),
});

export default function MakeSaleContent({
  actionId,
  closeDrawer,
}: {
  actionId: string;
  closeDrawer: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: "",
      commission: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await makeSale({
      saleDate: data.saleDate.toISOString(),
      price: data.price,
      commission: data.commission,
      actionId,
    });

    if (response.status === "ok") {
      closeDrawer();
    } else {
      form.setError("root", { message: response.message });
    }
  };

  const saleDate = form.watch("saleDate");

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Trasforma in vendita</DrawerTitle>
      </DrawerHeader>
      <div className="w-full px-5 pb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-6"
          >
            <FormField
              control={form.control}
              name="saleDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data vendita</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-[240px]">
                  <FormLabel>Prezzo</FormLabel>
                  <FormControl>
                    <RoundedInput
                      placeholder="Prezzo"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commission"
              render={({ field }) => (
                <FormItem className="w-[240px]">
                  <FormLabel>Punteggio</FormLabel>
                  <FormControl>
                    <RoundedInput
                      placeholder="Punteggio"
                      type="number"
                      {...field}
                    />
                  </FormControl>
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
              <button type="submit" disabled={!saleDate}>
                <ActionButton disabled={!saleDate}>trasforma</ActionButton>
              </button>
              <DiscardButton onClick={() => {}} />
            </div>
          </form>
        </Form>
      </div>
    </DrawerContent>
  );
}
