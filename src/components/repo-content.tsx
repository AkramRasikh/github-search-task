interface RepoContentProps {
  textContent?: string[];
  button: React.ReactNode;
  link: React.ReactNode;
}

const RepoContent = ({ button, textContent, link }: RepoContentProps) => (
  <>
    {button}
    {textContent?.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
    {link}
  </>
);

export default RepoContent;
