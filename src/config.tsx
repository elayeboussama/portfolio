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
    calendarLink: 'https://cal.com/oussamaelayeb/01',
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
                'A website that provides information about the Cosmic Coop game.',
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
                'Nader was absolutely amazing with the work he did for me. He truly went above and beyond and was super clear, efficient, and very knowledgeable. He thought about pretty much everything related to the project and even thought outside the box to create solutions to any issues. Truly a 10/10 hire. One of my best hired on Upwork. Will definitely be rehiring on future projects.',
        },
        {
            name: 'SaaSStellar',
            icon: 'saasStellar',
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
            name: 'gson-image-labelizer',
            icon: 'gsonImageLabelizer',
            description:
                'A tool that helps you label images and save them in local storage.',
            url: 'https://gson.nader.run/',
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
    openSource: {
        description:
            'I have contributed to various open-source projects, including Astro, TailwindCSS, shadcn/ui, and more. I also made a few open-source projects that did benefit the community.',
        projects: [
            {
                repository: 'stormynight9/clerk-shadcn-theme',
                description: (
                    <>
                        A theme for Clerk components that syncs with any
                        shadcn/ui configuration. Got excited when I had my first{' '}
                        <a
                            href='https://github.com/stormynight9/clerk-shadcn-theme/issues?q='
                            target='_blank'
                            className='deco whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2'
                        >
                            issue
                            <Icons.arrowUpRight className='inline-block size-4' />
                        </a>{' '}
                        and{' '}
                        <a
                            href='https://github.com/stormynight9/clerk-shadcn-theme/pulls?q='
                            target='_blank'
                            className='deco whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2'
                        >
                            PR
                            <Icons.arrowUpRight className='inline-block size-4' />
                        </a>{' '}
                        from the community!
                    </>
                ),

                title: 'clerk-shadcn-theme',
                link: 'https://www.github.com/stormynight9/clerk-shadcn-theme',
            },
            {
                repository: 'stormynight9/saasstellar',
                description:
                    'A modern SaaS landing page template with 12 themes, designed to collect emails for a waitlist. I made this when Linear-like websites were trending so I made one too.',
                title: 'SaaSStellar',
                link: 'https://www.github.com/stormynight9/saasstellar',
            },
        ],
    },
}