import { FaGithubAlt } from 'react-icons/fa';

export const GithubLink = () => {
  return (
    <a
      className="text-3xl print:hidden"
      href="https://github.com/JCarlosLucio/qr-code-generator"
      data-test="github-link"
    >
      <FaGithubAlt />
    </a>
  );
};
