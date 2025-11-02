import bhk from '../src/assets/bhk.png'
import cyberhost from '../src/assets/cyberhost.jpeg'
export const services = [
    {
        title: "Cybersecurity Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Film Lover",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Sourav';

export const experiences = [
    {
        'company': 'Redverse Reality',
        'role': 'Full Stack Intern',
        'duration': 'July 2024 - Present',
        'logo': bhk,
        'points': [
            'Involved in dynamic contributions to web development projects, actively influencing and improving the website.',
            'Developed multiple shared components to simplify tasks for fellow developers, boosting efficiency and teamwork.',
            'Enhanced product performance through significant contributions to backend development, optimizing essential components for improved efficiency 📈.',
            'Implemented data security for the company’s product to provide role-based access control ⚙️.'
        ],
        'url': 'https://bhk.ai',
    },
    {
        'company': 'THECYBERHOST',
        'role': 'Cybersecurity Intern',
        'duration': 'August 2023 - September 2023',
        'logo': cyberhost,
        'points': [
            'Gained experience with android application penetration testing.',
            'Worked on testing the application security for various application via offensive testing following white-hat protocols.'
        ],
        'url': 'https://www.the-cyberhost.com',
    },
    {
        'company': 'Hyland Software',
        'role': 'R&D Intern',
        'duration': 'August 2025 - September 2025',
        'logo': 'https://res.cloudinary.com/hyld/image/upload/f_auto,dpr_auto,w_auto,q_auto,c_scale/v1/h2/1080x1080-hyland-social-image',
        'points': [
            'Worked with Java Spring Boot to create microservices for internal tools.',
            'Working on the CI pipeline to automate the testing and deployment of microservices using GitHub Actions.'
        ],
        'url': 'https://www.hyland.com',
    }
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
