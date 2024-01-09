import { ExpandIcon } from './SVGComponents';

const Expand: React.FC<{ isExpanded: boolean; onClick: () => void }> = ({ isExpanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out bg-zinc-800 p-2 rounded-lg"
      style={{ marginRight: '-17px', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <ExpandIcon />
    </button>
  );
};

export default Expand;