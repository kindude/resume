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
  { id: 'github', title: 'GitHub', url: 'https://github.com/', logoURL: githubLogo },
  { id: 'linkedin', title: 'LinkedIn', url: 'https://www.linkedin.com/in/kindude/', logoURL: linkedinLogo },
];

export const stackImages = [
  { id: 'python', title: 'Python', logoURL: pythonLogo },
  { id: 'html', title: 'HTML', logoURL: htmlLogo },
  { id: 'css', title: 'CSS', logoURL: cssLogo },
  { id: 'tailwind', title: 'Tailwind CSS', logoURL: tailwindLogo },
  { id: 'vue', title: 'Vue.js', logoURL: vueLogo },
  { id: 'react', title: 'React.js', logoURL: reactLogo },
  { id: 'laravel', title: 'Laravel', logoURL: laravelLogo },
  { id: 'fastapi', title: 'FastAPI', logoURL: fastapiLogo },
];
