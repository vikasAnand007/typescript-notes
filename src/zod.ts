import { z } from "zod";
import express from "express";

// When using zod, we do done runtime validation.
// but we can also extract/infer Typescript type fro a zod schema
// For example ::

const ZodAddressSchema = z.string().min(1);

// extracting Typescript type of above schema..
type TAddress = z.infer<typeof ZodAddressSchema>;






// USECASE
// For example, the following code makes sure that the user is sending the right inputs to update their profile information
const app = express();

// Define the ZOD schema for profile update
const ZodUserProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

// extracting the Typescript type of above schema
type TUserProfile = z.infer<typeof ZodUserProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = ZodUserProfileSchema.safeParse(req.body);
  const updateBody: TUserProfile = req.body;

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
