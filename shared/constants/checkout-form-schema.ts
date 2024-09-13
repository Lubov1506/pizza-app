import * as zod from "zod";

export const checkoutFormSchema = zod.object({
  email: zod.string().min(2, "Enter valid email"),
  firstName: zod
    .string()
    .min(2, "First name must be at least 2 characters long"),
  lastName: zod.string().min(2, "Last name must be at least 2 characters long"),
  address: zod.string(),
  // address: zod.string().min(10, "Enter valid address"),
  comment: zod.string().optional(),
  phone: zod.string().min(10, "Enter valid phone number"),
});
export type CheckoutFormValues = zod.infer<typeof checkoutFormSchema>;
