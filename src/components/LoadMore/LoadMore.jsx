export default function LoadMore({onClick}) {
  return (
    <div style={btnContainerStyles}>
      <button className="button-secondary" onClick={onClick}> Load more</button>
    </div>
  );
}

const btnContainerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '150px',
};
