export default function ProductEntry(props) {
  return (
    <div className="col-lg-4 col-sm-6">
    <a className="product-box" href="/" title="Project Name">
      <img
        className="img-fluid"
        style={props.imgStyle}
        src={props.imgSrc}
        alt={props.alt}
      />
      <div className="product-box-caption">
        <div className="project-category text-white-50">
          {props.category}
        </div>
        <div className="project-name">{props.productTitle}</div>
      </div>
    </a>
  </div>
  )
}
