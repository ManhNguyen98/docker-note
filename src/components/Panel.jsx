import { useState } from 'react';
import { ReactComponent as IconPlus } from '../assets/icons/icon-fill-plusmark.svg';

const NOTE_COLORS = [
  { id: 0, name: 'orange', color: '#FFA940' },
  { id: 1, name: 'yellow', color: '#FADB14' },
  { id: 2, name: 'green', color: '#20C950' },
  { id: 3, name: 'indigo', color: '#2F54EB' },
  { id: 4, name: 'purple', color: '#722ED1' },
];
function Panel({onCreateNote}) {
  const [isShowListColor, setIsShowListColor] = useState(false);
  const onToggleListColor = () => {
    setIsShowListColor(!isShowListColor);
  };
  return (
    <div className="panel-wrapper">
      <h3 className="logo">Docket</h3>
      <div className="panel-group">
        <button
          className="btn"
          onClick={onToggleListColor}
          style={{ margin: '0 auto' }}
        >
          <IconPlus fill="#fff" />
        </button>
        <div className="list-color-wrapper">
          {NOTE_COLORS.map((item, index) => (
            <button
              key={item.id}
              className={`color-btn${isShowListColor ? ' show': ''}`}
              style={{
                backgroundColor: item.color,
                borderColor: item.color,
                transitionDelay: index*0.25 + 's'
              }}
              onClick={() => onCreateNote(item.color)}
            ></button>
          ))}
          {isShowListColor && (
            <>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Panel;
