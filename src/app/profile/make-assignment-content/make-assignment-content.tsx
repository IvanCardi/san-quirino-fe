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
import { makeAssignment } from "./actions";

const formSchema = z.object({
  assignment: z.date({ message: "Inserisci una data valida" }),
  endAssignment: z.date({ message: "Inserisci una data valida" }),
});

export default function MakeAssignmentContent({
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
    const response = await makeAssignment({
      assignment: data.assignment.toISOString(),
      endAssignment: data.endAssignment.toISOString(),
      actionId,
    });

    if (response.status === "ok") {
      closeDrawer();
    } else {
      form.setError("root", { message: response.message });
    }
  };

  const assignment = form.watch("assignment");
  const endAssignment = form.watch("endAssignment");

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle className="!text-[24px]">
          Trasforma in incarico
        </DrawerTitle>
      </DrawerHeader>
      <div className="w-full px-5 pb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-6"
          >
            <FormField
              control={form.control}
              name="assignment"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data incarico</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endAssignment"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data fine incarico</FormLabel>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    minDate={assignment}
                    disabled={!assignment}
                  />
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
              <button type="submit" disabled={!assignment || !endAssignment}>
                <ActionButton disabled={!assignment || !endAssignment}>
                  trasforma
                </ActionButton>
              </button>
              <DeleteButton onClick={() => {}} />
            </div>
          </form>
        </Form>
      </div>
    </DrawerContent>
  );
}
