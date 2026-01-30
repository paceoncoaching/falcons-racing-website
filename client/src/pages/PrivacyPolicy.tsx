import { PageHeader } from "@/components/PageHeader";

const HERO_IMAGE = "/assets/contact_hero_v3.jpg";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle your information" 
        image={HERO_IMAGE} 
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
          <h2 className="font-display font-bold text-3xl uppercase mb-6">Introduction</h2>
          <p className="font-body text-gray-600 mb-8">
            At Falcons Pedal Mafia Racing Team, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with us.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Information We Collect</h2>
          <p className="font-body text-gray-600 mb-8">
            We may collect personal information that you provide to us, such as your name, email address, and any other details you share when you contact us through our website forms.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">How We Use Your Information</h2>
          <p className="font-body text-gray-600 mb-8">
            The information we collect is used to respond to your enquiries, provide you with updates about the team, and improve our website's functionality. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Security</h2>
          <p className="font-body text-gray-600 mb-8">
            We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="font-display font-bold text-3xl uppercase mb-6">Contact Us</h2>
          <p className="font-body text-gray-600 mb-8">
            If you have any questions about our Privacy Policy, please contact us at <a href="mailto:kawkaw@falconscycling.com.au" className="text-primary hover:underline">kawkaw@falconscycling.com.au</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
