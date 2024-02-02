// components/CustomLink.js
import Link from 'next/link';

const CustomLink = ({ route, children }) => {
  return (
    <Link href={route}>
      {children}
    </Link>
  );
};

export default CustomLink;