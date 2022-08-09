// this component can be reusable for listing other data and display it
// this contains two buttons, update and delete
import React from "react";
import { Link } from "react-router-dom";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";

const ListLayout = (props) => {
	return (
		<div
			className="list-group-item d-flex flex-row align-items-center justify-content-between"
			key={props.data.id}
		>
			<p className="m-0">{`${props.data.firstName} ${props.data.lastName}`}</p>
			<div className="btn-group" role="group" aria-label="Basic example">
				<Link to={props.location} type="button" className="btn btn-primary">
					<PencilSquare />
				</Link>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => {
						props.btnDelete(props.data.id);
					}}
				>
					<TrashFill />
				</button>
			</div>
		</div>
	);
};

export default ListLayout;
