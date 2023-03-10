import Button from "react-bootstrap/Button";

export default function InfoBox(props) {
  return (
    <div className="infobox">
      <div>
        <strong>{props.name}</strong>
      </div>
      <div>{props.address}</div>
      {props.rating && (
        <div>
          ★ {props.rating} ({props.user_rating} reviews)
        </div>
      )}

      <div className="infobox-buttons">
        {props.open && props.open.open_now ? (
          <Button className="infobox-button btn-sm" variant="success">
            Open
          </Button>
        ) : (
          <Button className="infobox-button btn-sm" variant="danger">
            Closed
          </Button>
        )}
        <Button
          variant="outline-primary btn-sm"
          onClick={() => props.fetchDirections(props.selected)}
        >
          Directions
        </Button>
      </div>
    </div>
  );
}
