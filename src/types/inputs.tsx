export type PartnerFormValues = {
  company: string;
  email: string;
  message: string;
}; 

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string; // New: Phone number
  serviceInterest: string; // New: Service selector
  subject: string;
  message: string;
};

export type AcademyFormValues = {
  name: string;
  email: string;
  number: string;
  governorate: string;
  // Use union for predefined values
  team: "Blue Team" | "Red Team" | "default";
  courses: string;
  message: string;
};