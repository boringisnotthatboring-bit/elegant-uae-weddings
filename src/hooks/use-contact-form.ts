import { useState, type FormEvent } from "react";

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  weddingType: string;
  services: string[];
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  weddingType: "",
  services: [],
  message: "",
};

/**
 * Stateful hook for the contact enquiry form. Keeps form state and
 * submission handling out of the presentational component so the
 * "backend" wiring can be swapped later (e.g. to a server function
 * or CRM webhook) without touching JSX.
 */
export function useContactForm(overrides?: Partial<ContactFormValues>) {
  const [values, setValues] = useState<ContactFormValues>({
    ...initialValues,
    ...overrides,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) => setValues((v) => ({ ...v, [key]: value }));

  const toggleService = (s: string) =>
    setValues((v) => ({
      ...v,
      services: v.services.includes(s)
        ? v.services.filter((x) => x !== s)
        : [...v.services, s],
    }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to real submission endpoint via a service module.
    // Intentionally stubbed — see Rule 1.2 in project spec.
    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
  };

  const reset = () => {
    setValues(initialValues);
    setSubmitted(false);
  };

  return { values, submitted, update, toggleService, handleSubmit, reset };
}
