
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  grNumber: z.string().min(1, "GR number is required"),
  grade: z.string().min(1, "Grade is required"),
});

export type StudentInfo = z.infer<typeof formSchema>;

interface StudentInfoFormProps {
  onSubmit: (data: StudentInfo) => void;
  isLoading?: boolean;
}

const StudentInfoForm: React.FC<StudentInfoFormProps> = ({ 
  onSubmit, 
  isLoading = false
}) => {
  const form = useForm<StudentInfo>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      grNumber: "",
      grade: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="grNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GR Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your GR number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="5">Grade 5</SelectItem>
                  <SelectItem value="6">Grade 6</SelectItem>
                  <SelectItem value="7">Grade 7</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : "Continue to Program Selection"}
        </Button>
      </form>
    </Form>
  );
};

export default StudentInfoForm;
