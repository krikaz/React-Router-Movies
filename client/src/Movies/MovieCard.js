import React from 'react';

const MovieCard = props => {
	const { title, director, metascore, stars } = props.props;
	// const test = props.saveMovie;
	// console.log(props);
	// console.log(test);
	// console.log(props.props.title);
	return (
		<div className="save-wrapper">
			<div className="movie-card">
				<h2>{title}</h2>
				<div className="movie-director">
					Director: <em>{director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map(star => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))}
			</div>
			<div className="save-button" onClick={props.saveMovie}>
				Save
			</div>
		</div>
	);
};

export default MovieCard;
