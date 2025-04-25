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
  assignmentDate: z.date({ message: "Inserisci una data valida" }),
  endAssignmentDate: z.date({ message: "Inserisci una data valida" }),
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
      assignmentDate: data.assignmentDate.toISOString(),
      endAssignmentDate: data.endAssignmentDate.toISOString(),
      actionId,
    });

    if (response.status === "ok") {
      closeDrawer();
    } else {
      form.setError("root", { message: response.message });
    }
  };

  const assignmentDate = form.watch("assignmentDate");
  const endAssignmentDate = form.watch("endAssignmentDate");

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Trasforma in incarico</DrawerTitle>
      </DrawerHeader>
      <div className="w-full px-5 pb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-6"
          >
            <FormField
              control={form.control}
              name="assignmentDate"
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
              name="endAssignmentDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data fine incarico</FormLabel>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    minDate={assignmentDate}
                    disabled={!assignmentDate}
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
              <button
                type="submit"
                disabled={!assignmentDate || !endAssignmentDate}
              >
                <ActionButton disabled={!assignmentDate || !endAssignmentDate}>
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
