import Image from "./Image";

const Element = props => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "image":
      return <Image {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;
