export default function TermsPage() {
    return (
        <div className="container max-w-4xl py-12 md:py-16">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you")
                        and Home Doors ("we," "us" or "our"), concerning your access to and use of our website and services.
                        By accessing the website, you confirm that you have read, understood, and agreed to be bound by all of these Terms of Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software,
                        website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content")
                        and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us,
                        and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Products and Services</h2>
                    <p>
                        We make every effort to display as accurately as possible the colors, features, specifications, and details of the products
                        available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products
                        will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect
                        the actual colors and details of the products.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitations of Liability</h2>
                    <p>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect,
                        consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data,
                        or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
                    <p>
                        These conditions are governed by and interpreted following the laws of India, and the use of the United Nations Convention
                        of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are
                        a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <address className="not-italic mt-2">
                        Home Doors<br />
                        Nemmara Road, Pittupeedika<br />
                        Koduvayur, Palakkad-678501<br />
                        Kerala, India<br />
                        Email: <a href="mailto:homedoors73@gmail.com" className="text-primary hover:underline">homedoors73@gmail.com</a>
                    </address>
                </section>
            </div>
        </div>
    )
}
