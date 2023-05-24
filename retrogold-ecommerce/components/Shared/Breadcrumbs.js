
import Link from 'next/link';
import {useRouter} from 'next/router'
import { useLocation } from 'react-router-dom'

const Breadcrumb = () => {
 
  const router = useRouter()
  const{asPath} = router;
  // Split the current URL path into segments
  const pathSegments = asPath.split('/').filter((segment) => segment !== '');
  console.log(pathSegments)

  return (
    <nav className="bg-gray-200 py-2 px-4 breadcrumbs text-sm">
      <ol className="list-reset flex text-gray-700">
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment}>
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
          </li>
        ))}
      
      </ol>
    </nav>
  );
};

export default Breadcrumb;
