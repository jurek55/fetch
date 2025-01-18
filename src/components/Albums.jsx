import AlbumsMenu from "./AlbumsMenu";

const Albums = ({isVisible}) => {
	return (
		<div className = {`${isVisible} ? 'albums-nav-visible' : 'albums-nav-unvisble}'`}>
			<div className='nav'>
				<AlbumsMenu/>
			</div>
		</div>
	);
};
export default Albums;
