import { Icons } from '@/components/icons';


type Config = {
    name: string
    avatar: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    calendarLink?: string
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        icon?: keyof typeof Icons
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
    openSource?: {
        description?: string
        projects?: {
            repository: string
            description: string | JSX.Element
            title: string
            link: string
        }[]
    }
}

export const CONFIG: Config = {
    name: 'Oussama Elayeb',
    avatar: '/images/oussama.jpg',
    title: 'Software Engineer',
    siteUrl: 'https://oussama-elayeb.com/',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/elayeboussama',
            icon: 'github',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/guardian-001',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/oussama-elayeb-a853a6219/',
            icon: 'linkedin',
        },
        // {
        //     name: 'X',
        //     url: 'https://x.com/Naderferjani',
        //     icon: 'x',
        // },
        // {
        //     name: 'Upwork',
        //     url: 'https://www.upwork.com/freelancers/~0108a6d64ff5b64440',
        //     icon: 'upwork',
        // },
        {
            name: 'oussamaelayeb00@gmail.com',
            url: 'oussamaelayeb00@gmail.com',
            icon: 'email',
        },
    ],
    calendarLink: 'https://cal.com/oussamaelayeb/interview',
    description: (
        <>
            Hi, I&apos;m Oussama from Tunisia. I work as a part-time Full-stack
            Developer at{' '}
            <a
                href='https://unow.tn/'
                target='_blank'
                className='whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2'
            >
                UNOW
                <Icons.arrowUpRight className='inline-block size-4' />
            </a>
            . I’m a web and mobile full stack developer with a passion for cloud
            technologies and DevOps. I thrive on solving complex business logic
            and calculation challenges, always exploring new techniques to
            improve efficiency. I love integrating cutting-edge tools and
            optimizing workflows to create robust, scalable applications.
        </>
    ),
    descriptionRaw: ` Hi, I&apos;m Oussama from Tunisia. I work as a part-time Full-stack
            Developer at UNOW. I’m a web and mobile full stack developer with a passion for cloud
            technologies and DevOps. I thrive on solving complex business logic
            and calculation challenges, always exploring new techniques to
            improve efficiency. I love integrating cutting-edge tools and
            optimizing workflows to create robust, scalable applications.`,
    projects: [
        {
            name: 'UNOW',
            icon: 'UNOW',
            description:
                'An e-learning platform that encapsulates multiple methods of learning.',
            url: 'https://unow.tn/',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'WebRTC', icon: 'webRTC' },
            ],
            featured: true,
        },
        {
            name: 'Archimatch',
            image: '/images/archimatch.png ',
            description:
                'An app that connects clients with architects and suppliers based on their specific needs.',
            url: '',
            tags: [
                { name: 'Expo', icon: 'expo' },
                { name: 'React Native', icon: 'react' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Nativewind', icon: 'tailwindcss' },
                { name: 'I18N', icon: 'i18n' },
                { name: 'Obytes', icon: 'obytes' },
            ],
            featured: true,
            testimonial:
                "Le projet consiste à concevoir et développer une application mobile qui permettra aux clients de trouver des architectes et fournisseurs selon leurs besoins spécifiques (style architectural, catégorie de projet, etc.). Les architectes pourront également chercher des fournisseurs partenaires, et inversement. L'objectif est de créer une plateforme qui centralise ces interactions et simplifie le processus de collaboration",
        },
        {
            name: 'SaaSStellar',
            icon: 'glucoCheck',
            description:
                'A modern SaaS landing page template with 12 themes, designed to collect emails for a waitlist.',
            url: 'https://saasstellar.nader.run/',
            tags: [
                { name: 'Remix', icon: 'remix' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
            ],
            featured: true,
            github: 'https://github.com/stormynight9/saasstellar',
        },
        {
            name: 'json-generator',
            icon: 'JG',
            description:
                'A tool that helps you label images and save them in local storage.',
            url: 'https://json-generator-steel.vercel.app/',
            tags: [
                { name: 'Next', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
            ],
            featured: false,
            github: 'https://github.com/stormynight9/gson-image-labelizer',
        },
        {
            name: 'Ranmovanigen',
            image: '/images/ranmovanigen.png',
            description:
                'A Website that uses Anilist API to generate a random anime movie and show its information and trailer.',
            url: 'https://ranmovanigen.web.app/',
            featured: false,
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'GraphQL', icon: 'graphQL' },
            ],
            github: 'https://github.com/stormynight9/random-anime-movie-generator',
        },
    ],
}