import track from 'react-tracking';

const FooPage = props => {
  return (
    <div
      onClick={() => {
        props.tracking.trackEvent({ action: 'click' });

        // ... other stuff
      }}
    />
  );
};

export default track({
  page: 'FooPage',
})(FooPage);
