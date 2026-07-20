type ResultsProps = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = (props: ResultsProps) => {
  return (
    <div>
      {props.results.country && (
        <div>
          <div>Country: {props.results.country}</div>
          <div>City: {props.results.cityName}</div>
          <div>Temperature: {props.results.temperature}<span>℃</span></div>
          <div>Condition: {props.results.conditionText}</div>
          <div>
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
