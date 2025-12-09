import ContactForm from "../components/contact/ContactForm";
import ContactHeader from "../components/contact/ContactHeader";
import ContactInfoCard from "../components/contact/ContactInfoCard";

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-gray-100">
      <ContactHeader />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <ContactInfoCard />
        </div>

        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
