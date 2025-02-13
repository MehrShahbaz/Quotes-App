import { Link } from 'react-router-dom';

import { urls } from 'routes/urls';

type QuoteTagsType = {
  tags: string[];
};

const QuoteTags = ({ tags }: QuoteTagsType): React.ReactElement => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag: string, idx: number) => (
      <span key={tag + idx} className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
        #
        <Link className="underline" to={urls.createQuotesByTag(tag)}>
          {tag}
        </Link>
      </span>
    ))}
  </div>
);

export default QuoteTags;
