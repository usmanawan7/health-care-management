"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { getUserForLogin } from "@/lib/actions/patient.actions";

import { UserLoginFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, {
  FormFieldType,
} from "../../components/CustomFormField";
import SubmitButton from "../../components/SubmitButton";

const PatientLoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserLoginFormValidation>>({
    resolver: zodResolver(UserLoginFormValidation),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserLoginFormValidation>) => {
    setIsLoading(true);
    try {
      const user = await getUserForLogin(values.email, values.name);

      console.log(user,"user")
      console.log(user.users[0].$id,"user.user.id")
      if ( user ) {
        router.push(`/patients/${user.users[0].$id}/list-appointment`);
      }

    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        if (error.message.includes("Invalid credentials")) {
          form.setError("email", {
            type: "manual",
            message: "Invalid email or password",
          });
        }
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-6"
          >
            <section className="mb-12 space-y-4">
              <h1 className="header">Welcome Back 👋</h1>
            </section>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Name"
              placeholder="JohnDoe123"
              iconSrc="/assets/icons/user.svg"
              iconAlt="username"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />
            <SubmitButton isLoading={isLoading}>Login</SubmitButton>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PatientLoginForm;
