'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
  style: z.string().min(1, { message: "Style is required" }),
  duration: z.coerce.number().min(1, { message: "Duration is required" }),
})


const CompanionForm = () => {
  const form = useForm<z.input<typeof formSchema>, any, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "1",
      subject: "1",
      topic: "1",
      voice: "1",
      style: "1",
      duration: 1,
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.output<typeof formSchema>> = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return(
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the companion name" {...field} 
                  className="input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                <Select 
                onValueChange={field.onChange}
                defaultValue={field.value}
                >
                  <SelectTrigger className="input capitalize">
                      <SelectValue placeholder="Select the subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem
                        value={subject}
                        key={subject}
                        className="capitalize"
                        >
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What should the companion help with</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ex derivatives problems" {...field} 
                  className="input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <FormControl>
                <Select 
                onValueChange={field.onChange}
                defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                      <SelectValue placeholder="Select the voice" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Male'>
                          Male
                        </SelectItem>
                        <SelectItem value='Female'>
                          Female
                        </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                <Select 
                onValueChange={field.onChange}
                defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                      <SelectValue placeholder="Select the voice" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Formal'>
                          Formal
                        </SelectItem>
                        <SelectItem value='Casual'>
                          Casulal
                        </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated session duration in mintues</FormLabel>
                <FormControl>
                <Input 
                  type="number" 
                  placeholder="15" 
                  value={field.value as number | string | undefined}
                  onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                  className="input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full cursor-pointer">Find your companion</Button>
        </form>
      </Form>
    </div>
  )
}


export default CompanionForm;