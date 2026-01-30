import { PageHeader } from "@/components/PageHeader";

const HERO_IMAGE = "/assets/contact_hero_v3.jpg";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Terms of Service" 
        subtitle="Rules and guidelines for using our site" 
        image={HERO_IMAGE} 
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
          <h2 className="font-display font-bold text-3xl uppercase mb-6">Acceptance of Terms</h2>
          <p className="font-body text-gray-600 mb-8">
            By accessing or using the Falcons Pedal Mafia Racing Team website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Use of Content</h2>
          <p className="font-body text-gray-600 mb-8">
            All content on this website, including text, images, and logos, is the property of Falcons Pedal Mafia Racing Team or its partners and is protected by copyright laws. You may not use, reproduce, or distribute any content without our prior written permission.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">User Conduct</h2>
          <p className="font-body text-gray-600 mb-8">
            You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Disclaimer of Warranties</h2>
          <p className="font-body text-gray-600 mb-8">
            Our website is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy or availability of the website or its content.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Limitation of Liability</h2>
          <p className="font-body text-gray-600 mb-8">
            Falcons Pedal Mafia Racing Team shall not be liable for any damages arising from your use of or inability to use our website.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Changes to Terms</h2>
          <p className="font-body text-gray-600 mb-8">
            We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any changes indicates your acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
}
