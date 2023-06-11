import { Collapse } from "antd";
import PropTypes from "prop-types";

const CollapseSection = ({ items }) => (
  <div className="p-6">
    <Collapse className="text-lg" accordion items={items} />
  </div>
);

CollapseSection.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CollapseSection;
