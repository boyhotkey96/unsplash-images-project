import PropTypes from "prop-types";

ImageItem.propTypes = {
  item: PropTypes.any,
};

function ImageItem({ item }) {
  // console.log(item)

  return (
    <div className="gallery-image">
      <img
        src={item.urls.regular}
        alt={item.alt_description}
      />
    </div>
  );
}

export default ImageItem;
