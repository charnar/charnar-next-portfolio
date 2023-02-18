import { WorkTagProp } from "@/interfaces/workpageprops";
import { BiLink } from "react-icons/bi";

const WorkTag: React.FC<WorkTagProp> = ({
  tagName,
  tagContent,
  tagLinkFlag,
}) => {
  return (
    <li className="mt-2">
      <span className="uppercase bg-green-100 px-1 py-0.5 rounded-md font-semibold text-emerald-800 mr-4">
        {tagName}
      </span>
      <span>
        {tagLinkFlag ? (
          <a
            target="_blank"
            href={tagContent}
            className="hover:underline underline-offset-4 text-blue-500 dark:text-pink-500"
          >
            {tagContent}
          </a>
        ) : (
          tagContent
        )}
      </span>
    </li>
  );
};

export default WorkTag;
