"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { submitQuote } from "@/lib/api"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  buildingType: z.string({ required_error: "Please select a building type" }),
  numberOfFloors: z.string().min(1, "Please specify number of floors"),
  elevatorType: z.string({ required_error: "Please select an elevator type" }),
})

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      buildingType: "",
      numberOfFloors: "",
      elevatorType: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await submitQuote(values)
      toast({
        title: "Quote Request Received",
        description: "Our technical team will analyze your requirements and contact you within 24 hours.",
      })
      form.reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit request. Please call us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="buildingType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Building Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential Apartment</SelectItem>
                    <SelectItem value="commercial">Commercial/Office</SelectItem>
                    <SelectItem value="villa">Private Villa/Home</SelectItem>
                    <SelectItem value="hospital">Hospital/Healthcare</SelectItem>
                    <SelectItem value="industrial">Industrial/Warehouse</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="numberOfFloors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Floors (Stops)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g. 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="elevatorType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Elevator Preference</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select elevator" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="passenger">Passenger Elevator</SelectItem>
                    <SelectItem value="residential">Residential Lift</SelectItem>
                    <SelectItem value="glass">Glass/Capsule Lift</SelectItem>
                    <SelectItem value="freight">Freight/Goods Lift</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-safety-orange hover:bg-safety-orange/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Calculator className="mr-2 h-4 w-4" />}
          Get Free Estimate
        </Button>
      </form>
    </Form>
  )
}
