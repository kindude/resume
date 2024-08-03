import githubLogo from '@/assets/github.png';
import linkedinLogo from '@/assets/linkedin.png';
import pythonLogo from '@/assets/python.png';
import htmlLogo from '@/assets/html.png';
import cssLogo from '@/assets/css.png';
import tailwindLogo from '@/assets/tailwind.png';
import vueLogo from '@/assets/vue.png';
import reactLogo from '@/assets/react.png';
import laravelLogo from '@/assets/laravel.png';
import fastapiLogo from '@/assets/fastapi.png';

export const navLinks = [
  { id: '/', title: 'Home' },
  { id: 'education', title: 'Education' },
  { id: 'stack', title: 'Stack' },
  { id: 'experience', title: 'Experience' },
];

export const footerLinks = [
  { id: 'github', title: 'GitHub', url: 'https://github.com/kindude', logoURL: githubLogo },
  { id: 'linkedin', title: 'LinkedIn', url: 'https://www.linkedin.com/in/kindude/', logoURL: linkedinLogo },
];

export const stackImages = [
  { id: 'python', title: 'Python', logoURL: pythonLogo , percentage: 100},
  { id: 'html', title: 'HTML', logoURL: htmlLogo, percentage: 100 },
  { id: 'css', title: 'CSS', logoURL: cssLogo, percentage: 100 },
  { id: 'tailwind', title: 'Tailwind', logoURL: tailwindLogo, percentage: 100},
  { id: 'vue', title: 'Vue.js', logoURL: vueLogo, percentage: 100},
  { id: 'react', title: 'React.js', logoURL: reactLogo, percentage: 100},
  { id: 'laravel', title: 'Laravel', logoURL: laravelLogo, percentage: 100},
  { id: 'fastapi', title: 'FastAPI', logoURL: fastapiLogo, percentage: 100},
];
