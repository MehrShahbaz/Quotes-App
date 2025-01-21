import { AuthorType } from 'types/authorTypes';
type AuthorParams = {
  author: AuthorType;
};

const Author = ({ author }: AuthorParams): React.ReactElement => {
  const { name, link, bio, description } = author;

  return (
    <>
      <td className="px-4 py-2 border-b whitespace-nowrap">{name}</td>
      <td className="px-4 py-2 border-b">{description}</td>
      <td className="px-4 py-2 border-b">{bio}</td>
      <td className="px-4 py-2 border-b">
        <a href={link} target="_blank" rel="noreferrer">
          Info
        </a>
      </td>
    </>
  );
};

export default Author;
