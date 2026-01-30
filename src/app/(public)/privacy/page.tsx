export default function PrivacyPolicyPage() {
    return (
        <div className="container max-w-4xl py-12 md:py-16">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Home Doors ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                        and use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information
                        about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Name and Contact Data (email address, phone number).</li>
                        <li>Project details and requirements you share via our contact forms.</li>
                        <li>Technical data such as IP address, browser type, and operating system collected automatically for analytics.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                    <p>
                        We use the information we collect or receive:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you administrative information.</li>
                        <li>To fulfill and manage your orders and project inquiries.</li>
                        <li>To improve our website and marketing efforts.</li>
                        <li>To respond to legal requests and prevent harm.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
                    <p>
                        We explicitly strictly do not sell your data to third parties. We may share information with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Service Providers: We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.</li>
                        <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security of Your Information</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information.
                        However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                        Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at <span className="font-medium text-foreground">homedoors73@gmail.com</span> or by post to:
                    </p>
                    <address className="not-italic mt-2">
                        Home Doors<br />
                        Nemmara Road, Pittupeedika<br />
                        Koduvayur, Palakkad-678501<br />
                        Kerala, India
                    </address>
                </section>
            </div>
        </div>
    )
}
