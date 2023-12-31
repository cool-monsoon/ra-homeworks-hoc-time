import PropTypes from "prop-types";
import DateTime from "./DateTime";
import witchDateTimePretty from "./HOC/DateTimePretty";

const DateTimePretty = witchDateTimePretty(DateTime);

export default function Video(props) {
    return (
        <div className="video">
            <iframe
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
            </iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

Video.propTypes = {
    date: PropTypes.any,
    url: PropTypes.any,
}