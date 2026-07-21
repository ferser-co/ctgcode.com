import type { LocaleSchema } from '../i18n';
import { legalEntity } from '../legal';

/** Identification of the Data Controller, shared by both legal documents. */
const controller = `${legalEntity.fullName}, a natural person formally registered as a merchant with the Chamber of Commerce, identified with Tax ID (NIT) ${legalEntity.taxId}`;

const en: LocaleSchema = {
    nav: {
        home: 'Home',
        services: 'Services',
        contact: 'Contact',
        cta: 'Start your project',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
    },
    hero: {
        eyebrow: 'Software studio · Cartagena',
        title: 'Building the digital future from the Caribbean',
        titlePre: 'Building ',
        titleMark: 'the digital future ',
        titlePost: 'from the Caribbean',
        description: 'Custom software development and high-performance web solutions, from Cartagena to the world.',
        file: 'future.ts',
        code: [
            'import { sun, sea } from "@caribbean/cartagena";',
            '',
            'const studio = new CTGCode({',
            '  origin: [10.4236, -75.5518],',
            '  goldenHour: true,',
            '});',
            '',
            'export const future = studio',
            '  .design({ handcrafted: true })',
            '  .build({ tailorMade: true })',
            '  .deploy("→ to the world");',
        ],
        statusBuilding: 'compiling…',
        statusReady: 'live',
        output: '→ 200 OK · future deployed in 47ms',
        secondary: 'see services',
        scroll: '$ scroll --sail-with-us',
        chipA: 'goldenHour: true',
        chipB: '// handcrafted, tailor-made',
    },
    about: {
        eyebrow: 'our values',
        title: 'Four principles\nthat drive our work',
        tag: 'chart of values · scale 1:1',
        portLabel: 'our commitment',
        commitment: {
            eyebrow: 'to you',
            title: 'Your success is our destination',
            body: 'We believe quality software is built on clear standards. We develop scalable solutions with solid architecture, transparency, and a strong focus on performance, guiding our clients from the initial idea to deployment.',
            signature: '$ course set → your success',
        },
        values: [
            {
                bearing: '000°',
                tagline: 'true north',
                name: 'Trust',
                body: 'We don’t improvise. From day one, we establish clear scopes, realistic timelines, and costs with no surprises. We deliver what we promise.',
            },
            {
                bearing: '090°',
                tagline: 'where the sun rises',
                name: 'Excellence',
                body: 'We don’t settle for "it works". We care about every detail: the user experience, the efficiency of the code, and the quality of the final product.',
            },
            {
                bearing: '270°',
                tagline: 'toward what’s next',
                name: 'Innovation',
                body: 'We adopt modern technologies with judgment. We embrace the new when it brings real value, and stick to the proven when stability matters most.',
            },
            {
                bearing: '180°',
                tagline: 'open sea',
                name: 'Resilience',
                body: 'Technical or business challenges are part of the journey. We face them head-on with robust solutions designed to withstand time and market changes.',
            },
        ],
    },
    projects: {
        eyebrow: 'work',
        title: 'Shipped work',
        lead: 'Live sites and numbers anyone can measure again.',
        ctaAll: 'See all projects',
        indexSlug: 'projects',
        visit: 'Visit the site',
        metricsSource: 'Measured with PageSpeed Insights · July 2026',
        testimonial: {
            label: 'what the client says',
            quote:
                'Excellent work… very professional and efficient throughout. I recommend them.',
            author: 'Joseph Caballero Lamadrid',
            source: 'Google review · July 2026',
            sourceUrl: 'https://maps.app.goo.gl/st6sCh5rgCaqkSri7',
            note: 'Translated from the original review, written in Spanish.',
        },
        featured: {
            client: 'Recogras',
            tagline: 'Certified used-oil collection · Cartagena',
            summary:
                'Corporate site for an environmental operator that collects used cooking oil and grease-trap waste from restaurants, hotels and food businesses. Built with Astro and statically rendered: no extra layers, all the weight put on opening fast from a head chef’s phone.',
            url: 'https://recograscolombia.com/',
            urlLabel: 'recograscolombia.com',
            stack: ['Astro', 'SSG', 'Tailwind', 'Hand-written CSS'],
            metrics: [
                { label: 'Performance (desktop)', value: '100' },
                { label: 'Performance (mobile)', value: '98' },
                { label: 'SEO', value: '100' },
                { label: 'Accessibility', value: '96' },
            ],
        },
    },
    services: {
        eyebrow: 'services',
        title: 'Engineering solutions built to scale',
        lead: 'Software development with clean architecture, measured speed, and a business-result focus.',
        ctaAll: 'Explore the full catalogue of services',
        indexSlug: 'services',
        featured: {
            label: 'flagship service',
            title: 'Custom Software Development',
            body: 'We design and build complex web platforms, admin dashboards and software architectures tailored to the exact needs of your business. We prioritise raw performance, security and scalability, delivering robust solutions with no unnecessary layers and no filler code.',
            stack: ['python', 'fastapi', 'postgresql', 'typescript', 'astro', 'rust'],
        },
        secondary: [
            {
                title: 'High-Performance Web Development',
                body: 'Corporate sites and landing pages built around conversion and instant load times. Optimised to 100% on PageSpeed to stand out in search, improve SEO rankings and deliver a seamless user experience.',
                stack: ['astro', 'typescript', 'javascript', 'css', 'htmx', 'jinja'],
            },
            {
                title: 'Automation Development & Integration',
                body: 'We connect the tools you already work with and automate recurring operational workflows. We build custom integrations and efficient API interfaces to cut manual work, remove errors and shorten response times.',
                stack: ['python', 'fastapi', 'rest-api', 'postgresql'],
            },
        ],
        faq: {
            eyebrow: 'faq // services',
            title: 'Before you write to us',
            items: [
                {
                    q: 'How long does a project take to develop?',
                    a: 'Development time varies with the complexity of the scope and the working dynamic. Factors such as requirement definition, API integrations and the availability of inputs (content, access credentials and client feedback) determine the final schedule. Every project ships with a clear work plan and defined milestones to guarantee continuous progress.',
                },
                {
                    q: 'How do you estimate costs and what payment terms do you offer?',
                    a: 'We quote at a fixed price based on the agreed scope and requirements. We offer payment terms adapted to the size of the project, such as a 50/50 split or payments divided by delivery milestones, ensuring transparency with no surprises and no hidden costs.',
                },
                {
                    q: 'What technologies do you use and how do you choose the stack for a project?',
                    a: 'We select tools according to the needs of the project: Astro is our preference for the web (SSG/SSR), complemented with HTMX, Jinja2 or Laravel depending on the case. On the backend Python leads (FastAPI, Django, Flask), boosted with Rust for performance-critical work, alongside Node.js and PHP. We work with relational and NoSQL databases (PostgreSQL, MySQL, SQLite, MongoDB, Firebase), containers with Docker and mobile development, always guaranteeing a clean and efficient architecture.',
                },
                {
                    q: 'Do you offer post-launch support and warranty?',
                    a: 'Yes, every project includes 30 days of post-delivery warranty for bug fixes or operational adjustments at no extra cost. We also offer optional plans for preventive maintenance, continuous optimisation and cloud infrastructure management.',
                },
                {
                    q: 'Do you work with clients outside of Cartagena or Colombia?',
                    a: 'Yes. We operate remotely both nationally and internationally. We have streamlined communication, project management, and milestone delivery processes to collaborate seamlessly with clients from any location or time zone.',
                },
            ],
        },
    },
    legal: {
        eyebrow: 'legal document',
        updatedLabel: 'Last updated',
        pendingNotice:
            'Document under review: the identification details of the Data Controller are yet to be confirmed.',
        privacy: {
            title: 'Privacy Policy',
            summary:
                'How CTG Code collects, uses and protects your personal data under the data protection laws of the Republic of Colombia.',
            intro: `This website, CTG Code, is operated by ${controller} (hereinafter, the "Data Controller"). We take your privacy and the protection of your personal data very seriously. This Privacy Policy describes how we collect, use, store, and protect your information in accordance with applicable data protection regulations.`,
            sections: [
                {
                    heading: 'Information We Collect and Its Purpose',
                    items: [
                        {
                            term: 'Contact Form Data',
                            text: 'When filling out our form, we collect data such as your name, email address, and the details of your inquiry or project. The purpose of collecting this data is strictly commercial: to manage your request, contact you, and provide the quotes or service information you requested.',
                        },
                        {
                            term: 'Browsing Data and Cookies',
                            text: 'Through analytics tools, we gather anonymous information about your behavior on the site (pages visited, time spent, country of origin) solely to optimize user experience and measure campaign performance.',
                        },
                    ],
                },
                {
                    heading: 'Third-Party Service Providers and Data Transfer',
                    body: 'To ensure a secure and high-standard experience, we work with established global platforms. Your data may be processed through:',
                    items: [
                        {
                            term: 'Formspree',
                            text: 'Contact form data is securely transmitted through their platform for the sole purpose of delivering it to our business inbox.',
                        },
                        {
                            term: 'Google Analytics and Google Ads',
                            text: 'Tools used under strict security parameters to measure web traffic and manage advertising.',
                        },
                    ],
                },
                {
                    heading: 'Consent and Cookies (Google Consent Mode v2)',
                    body: "This website strictly respects your privacy choices by implementing Google Consent Mode v2. By default, all analytical and advertising tracking is completely denied. We will only collect and process your browsing data if you grant explicit consent through our floating cookie banner. You can revoke this permission at any time by clearing your browser's cookies.",
                },
                {
                    heading: 'Your Rights',
                    body: `As the owner of your personal data, you have the right to access, update, rectify, or request the deletion of your information from our databases at any time. To exercise these rights, or if you have any questions regarding this policy, you can contact the Data Controller directly by sending an email to: ${legalEntity.email}.`,
                },
            ],
        },
        terms: {
            title: 'Terms and Conditions of Use',
            summary:
                'Conditions for using the site and CTG Code development services: intellectual property, licensing, liability and governing law.',
            intro: `Welcome to the CTG Code website. This website and its related software development services are operated by ${controller}. By accessing this website or hiring our services, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website or services.`,
            sections: [
                {
                    heading: 'Intellectual Property and Software Licensing',
                    items: [
                        {
                            term: 'Ownership by CTG Code',
                            text: `All content, interface designs, base source code, tools, trademarks, and graphics displayed on this website or embedded in our solutions are the exclusive property of CTG Code (owned by ${legalEntity.fullName}).`,
                        },
                        {
                            term: 'Client Deliverables',
                            text: 'The source code, automation, or software developed for a client remains the property of CTG Code, unless the total transfer of economic rights is explicitly negotiated, formalized, and paid for in full according to the corresponding service contract.',
                        },
                        {
                            term: 'License of Use',
                            text: "Until such transfer is completed, the client receives a permanent, non-exclusive, internal license of use. This copy of the code is delivered solely for the client's internal operations.",
                        },
                        {
                            term: 'Freedom of Maintenance',
                            text: 'This license explicitly grants the client the freedom to hire third parties to build new features, modify, or perform maintenance on the delivered software. Under no circumstances do we lock in or force the client to work exclusively with us to update their platform.',
                        },
                    ],
                },
                {
                    heading: 'Liability for Code Leaks and Code Custody',
                    items: [
                        {
                            text: 'Any leak, unauthorized copying, or exposure of code that has not been publicly released by us (such as private GitHub repositories or proprietary libraries) will be the sole responsibility of the client once the software has been delivered.',
                        },
                        {
                            text: 'If the leak or misuse of the code is caused by external staff or third parties hired by the client for maintenance or updates, the legal liability towards CTG Code will remain with the client. The client may, at their own discretion, pursue legal action against that third party.',
                        },
                        {
                            text: 'It is strictly prohibited to reverse engineer, hack, or engage in any malicious or unlawful use of any software delivered by us.',
                        },
                    ],
                },
                {
                    heading: 'Third-Party Service Providers and Technical Limitation of Liability',
                    items: [
                        {
                            term: 'Commitment to Quality',
                            text: 'We formally commit to building and deploying our solutions using established, reliable, and industry-standard global infrastructure providers (such as Google, GitHub, Formspree, Hostinger, among others) to minimize any service downtime or security risks.',
                        },
                        {
                            term: 'Out-of-Control Failures',
                            text: 'Due to the nature of software engineering, CTG Code shall not be held legally or financially liable for service interruptions, server crashes, connectivity issues, or security breaches directly caused by these third-party providers. We will always try to provide support and seek solutions for anything within our direct technical control; however, if a solution is impossible due to a provider failure, the client understands and accepts it is outside our scope.',
                        },
                        {
                            term: 'Migrations',
                            text: 'Should the client decide to migrate their systems, databases, or infrastructure to other servers or technologies, such consulting, export, and deployment work will be quoted and billed completely separately.',
                        },
                    ],
                },
                {
                    heading: 'Governing Law and Jurisdiction',
                    body: 'These terms are governed by and construed in accordance with the laws of the Republic of Colombia. Any dispute, claim, or controversy arising out of the use of this website or the execution of our development services shall be subject to the exclusive jurisdiction of the courts of Cartagena, Colombia.',
                },
            ],
        },
    },
    notFound: {
        status: 'error 404 · route not found',
        title: 'This page sank with the sunset',
        lead: 'The sea took it — or maybe it never existed. The lighthouse is still on to guide you back to harbor.',
        cta: 'Back to harbor',
        coords: 'safe harbor → 10.4236° N, 75.5518° W · Cartagena de Indias',
    },
    langNotice: {
        message: 'This page is also available in English.',
        action: 'View in English',
        dismiss: 'Dismiss',
    },
    cookies: {
        message: 'We use cookies to measure traffic and improve the site. Nothing runs until you decide.',
        accept: 'Accept',
        reject: 'Decline',
    },
    footer: {
        eyebrow: 'software studio · cartagena de indias',
        claim: 'Shall we set sail?',
        lead: 'Tell us what you want to build and we’ll chart the course.',
        surface: 'back to the surface',
        colophon: '$ handcrafted by the sea · 10.4236° N, 75.5518° W',
        rights: 'all rights reserved',
        nav: 'navigation',
        legal: 'legal',
        channels: 'channels',
        privacy: 'Privacy policy',
        privacySlug: 'privacy',
        terms: 'Terms & conditions',
        termsSlug: 'terms',
        email: 'Email',
        form: {
            name: 'name',
            namePlaceholder: 'What should we call you?',
            email: 'email',
            emailPlaceholder: 'you@email.com',
            message: 'your idea',
            messagePlaceholder: 'A website, an app, an integration…',
            cta: 'Send',
        },
        success: 'Course set!',
        messageSent: 'We have received your idea. We will get back to you as soon as possible.',
        error: 'Something went wrong',
        messageError: 'Sorry, there was an error sending your message. Please try again later or contact us directly through our channels.',
        formReset: 'Send another message',
    }
};

export default en;