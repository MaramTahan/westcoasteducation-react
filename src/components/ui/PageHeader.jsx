// set pageheader as the page titel for each app page
import PropTypes from 'prop-types';
const PageHeader = ({headerText}) => {
  return <h1 className='page-titel'>{headerText}</h1>;
};
PageHeader.propTypes = {
  headerText: PropTypes.string,
};

PageHeader.defaultProps = {
  headerText: 'Title for the page',
};
export default PageHeader;