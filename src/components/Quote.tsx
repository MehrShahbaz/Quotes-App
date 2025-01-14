import { QuoteType } from 'types/quotesType';
type QuoteParams = {
  quote: QuoteType;
};

const Quote = ({ quote }: QuoteParams): JSX.Element => {
  const { author, content, tags } = quote;

  return (
    <>
      <td className="px-4 py-2 border-b">{author}</td>
      <td className="px-4 py-2 border-b">{content}</td>
      <td className="px-4 py-2 border-b">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, idx: number) => (
            <span key={idx} className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </td>
    </>
  );
};

export default Quote;
