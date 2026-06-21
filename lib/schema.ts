import { z } from 'zod';

// Zod validation schema for client-and-server data validation
export const estimateSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be under 50 characters." }),
  phone: z.string()
    .min(10, { message: "Please enter a valid phone number (at least 10 digits)." })
    .max(20, { message: "Phone number is too long." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." }),
  address: z.string()
    .min(5, { message: "Please provide a complete service address." }),
  service: z.string()
    .min(1, { message: "Please select a specific service." }),
  message: z.string()
    .max(1000, { message: "Message must be under 1000 characters." })
    .optional(),
});

export type EstimateInput = z.infer<typeof estimateSchema>;
