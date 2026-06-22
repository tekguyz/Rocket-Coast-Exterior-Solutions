'use client';

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { SERVICES } from "@/lib/constants"
import { estimateSchema, EstimateInput } from "@/lib/schema"
import { submitEstimate } from "@/app/actions/send-estimate"

import { Logo } from "@/components/ui/Logo"

const ErrorBlock = ({ error }: { error?: string }) => {
  if (!error) return null;
  return (
    <div className="h-5 mt-1 overflow-hidden">
      <span className="block text-[11px] font-sans font-semibold tracking-wide text-red-500 animate-in slide-in-from-top-1 opacity-100">
        {error}
      </span>
    </div>
  );
};

export default function EstimateForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{ type: 'success' | 'error'; message: string; isMock?: boolean } | null>(null);

  // Helper formatting (###) ###-####
  const formatPhoneNumber = (value: string) => {
    const numbersOnly = value.replace(/\D/g, "");
    const limited = numbersOnly.slice(0, 10);
    if (limited.length <= 3) return limited;
    if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<EstimateInput>({
    resolver: zodResolver(estimateSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      message: "",
    }
  });

  const onSubmit = async (data: EstimateInput) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("service", data.service);
      formData.append("message", data.message || "");

      const result = await submitEstimate(null, formData);

      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message || "Thank you! Your estimate request was sent successfully.",
          isMock: !!result.mockMode
        });
        reset();
      } else {
        setStatus({
          type: 'error',
          message: result.error || "Form submission failed. Please verify your variables or contact us."
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: "An unexpected system transition error occurred. Please call (321) 693-9845 for immediate support."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate" className="bg-sky-tint/45 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-sky-blue/10 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute left-[10%] top-[20%] w-[600px] h-[600px] bg-sky-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-ignition-red px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white mb-6 shadow-sm">
            Free Diagnostics
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-black text-navy uppercase leading-tight tracking-tight">
            Schedule Your Estimate
          </h2>
          <div className="w-16 h-1.5 bg-ignition-red mx-auto mt-6 mb-6" />
          <p className="text-lg text-ink/75 font-sans leading-relaxed tracking-wide">
            Ready to upgrade your property&apos;s exterior? Send us your details below. Our team reviews layout parameters via satellite mapping and deploys a rapid quote within 24 hours.
          </p>
        </div>

        {/* Lead Capture form body wrap */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white via-white/95 to-sky-tint/30 border border-sky-blue/20 p-6 sm:p-10 shadow-[0_20px_60px_rgba(30,41,59,0.08)] rounded-2xl relative overflow-hidden">
          
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-blue via-ignition-red to-navy" />

          <CardHeader className="text-center pb-6 pt-4 px-0">
            <Logo theme="light" className="h-8 md:h-10 mx-auto mb-4 object-contain" />
            <CardTitle className="text-2xl sm:text-3xl uppercase font-display font-black text-navy tracking-tight">Submit Property Details</CardTitle>
            <CardDescription className="text-sm font-sans tracking-wide mt-2">All estimates are 100% free with no legal commitments.</CardDescription>
          </CardHeader>

          <CardContent className="px-0 pb-0 sm:px-4">
            {status && (
              <div className="space-y-4 mb-6">
                <div 
                  className={`p-4 rounded-xl flex items-start gap-4 border ${
                    status.type === 'success' 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950' 
                      : 'bg-red-50 border-red-200 text-red-950'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider font-display leading-tight">
                      {status.type === 'success' ? 'Estimate Received!' : 'Submission Issue'}
                    </h4>
                    <p className="text-sm font-sans mt-1 leading-relaxed">
                      {status.message}
                    </p>
                  </div>
                </div>

                {status.type === 'success' && status.isMock && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
                    <Sparkles className="h-4 w-4 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-[0.15em] font-display">System Lead Recorded</h5>
                      <p className="text-xs font-sans mt-1.5 leading-relaxed text-amber-950/80">
                        We validated layout specifications and saved this lead inside the system console. When you connect your <strong>RESEND_API_KEY</strong> credential in AI Studio, customer submissions will route instantly to <strong>rocketcoastexteriorsolutions@gmail.com</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
                <div className="flex flex-col">
                  <label htmlFor="form-name" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <Input 
                    id="form-name"
                    placeholder="Enter your full name" 
                    error={!!errors.name}
                    className="bg-sky-tint/30 border-sky-blue/15 text-navy focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl h-11 sm:h-12 shadow-inner placeholder:text-navy/30"
                    {...register("name")}
                  />
                  <ErrorBlock error={errors.name?.message} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="form-address" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5 sm:mb-2">
                    Service Address
                  </label>
                  <Input 
                    id="form-address"
                    placeholder="e.g. 104 Rocket Way, Cocoa, FL" 
                    error={!!errors.address}
                    className="bg-sky-tint/30 border-sky-blue/15 text-navy focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl h-11 sm:h-12 shadow-inner placeholder:text-navy/30"
                    {...register("address")}
                  />
                  <ErrorBlock error={errors.address?.message} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
                <div className="flex flex-col">
                  <label htmlFor="form-email" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="form-email"
                    type="email"
                    placeholder="yourname@domain.com" 
                    error={!!errors.email}
                    className="bg-sky-tint/30 border-sky-blue/15 text-navy focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl h-11 sm:h-12 shadow-inner placeholder:text-navy/30"
                    {...register("email")}
                  />
                  <ErrorBlock error={errors.email?.message} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="form-phone" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="form-phone"
                    type="tel"
                    placeholder="(321) 693-9845" 
                    error={!!errors.phone}
                    className="bg-sky-tint/30 border-sky-blue/15 text-navy focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl h-11 sm:h-12 shadow-inner placeholder:text-navy/30"
                    {...register("phone", {
                      onChange: (e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        setValue("phone", formatted, { shouldValidate: true });
                      }
                    })}
                  />
                  <ErrorBlock error={errors.phone?.message} />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="form-service-select" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5 sm:mb-2">
                  Requested Service Block
                </label>
                <Select
                  id="form-service-select"
                  error={!!errors.service}
                  className="bg-sky-tint/30 border-sky-blue/15 text-navy focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl h-11 sm:h-12 shadow-inner"
                  {...register("service")}
                >
                  <option value="">-- Click to Select Your Service --</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="multiple-services">Combined Multi-Service Solutions</option>
                </Select>
                <ErrorBlock error={errors.service?.message} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="form-message" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5 sm:mb-2">
                  Special Notes & Property Details (Optional)
                </label>
                <Textarea 
                  id="form-message"
                  placeholder="Tell us about special conditions, roof pitches, HOA deadlines, or paver sealing area details..." 
                  error={!!errors.message}
                  className="bg-sky-tint/30 border-sky-blue/15 text-navy focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl min-h-[100px] shadow-inner placeholder:text-navy/30 resize-none"
                  {...register("message")}
                />
                <ErrorBlock error={errors.message?.message} />
              </div>

              <div className="pt-2 sm:pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative w-full h-12 sm:h-14 bg-ignition-red text-white uppercase tracking-widest font-extrabold font-sans text-[13px] sm:text-sm rounded-xl transition-all hover:bg-ignition-red/95 shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden group cursor-pointer disabled:opacity-80 disabled:cursor-wait disabled:hover:translate-y-0 border-none outline-none focus-visible:ring-2 focus-visible:ring-sky-blue"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3 animate-in fade-in zoom-in duration-300">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Transmitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <span>Launch Request</span>
                      <Send className="h-4.5 w-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  )}
                  {/* Sheen effect */}
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>
        
      </div>
    </section>
  );
}
