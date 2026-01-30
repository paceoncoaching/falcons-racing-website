import { PageHeader } from "@/components/PageHeader";
import { useContactForm } from "@/hooks/use-content";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// open road
const HERO_IMAGE = "/assets/contact_hero_v3.jpg";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useContactForm();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "General",
      message: "",
    },
  });

  function onSubmit(data: InsertMessage) {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with the team" 
        image={HERO_IMAGE} 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-4xl uppercase mb-8 text-black">Get in Touch</h2>
            <p className="font-body text-gray-600 mb-12 text-lg leading-relaxed">
              Have a question about the team? Interested in sponsorship opportunities? 
              Or maybe you're a rider looking to join our development pathway. 
              Fill out the form and we'll be in touch.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl uppercase mb-1">Email</h4>
                  <a href="mailto:kawkaw@falconscycling.com.au" className="text-gray-600 hover:text-primary transition-colors">kawkaw@falconscycling.com.au</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl uppercase mb-1">Location</h4>
                  <p className="text-gray-600">Perth, Western Australia</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h4 className="font-display font-bold text-xl uppercase mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/falcons_racing_cc" target="_blank" rel="noopener noreferrer" className="bg-black text-white hover:bg-primary p-4 rounded-lg transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-black text-white hover:bg-primary p-4 rounded-lg transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-black text-white hover:bg-primary p-4 rounded-lg transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="font-display font-bold text-2xl uppercase mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold uppercase text-xs tracking-wider text-gray-500">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20" />
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
                      <FormLabel className="font-bold uppercase text-xs tracking-wider text-gray-500">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20" />
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
                      <FormLabel className="font-bold uppercase text-xs tracking-wider text-gray-500">Topic</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="General">General Inquiry</SelectItem>
                          <SelectItem value="Sponsorship">Sponsorship</SelectItem>
                          <SelectItem value="Join Team">Join the Team</SelectItem>
                          <SelectItem value="Media">Media/Press</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold uppercase text-xs tracking-wider text-gray-500">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help?" 
                          className="min-h-[150px] resize-none border-gray-200 focus:border-primary focus:ring-primary/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-wider h-14 text-lg rounded skew-x-[-6deg]"
                >
                  <span className="skew-x-[6deg]">
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
