import Masonry from "react-layout-masonry";
import Item from "./Item";

const AlbumMarszewo = ({ images }) => {
	const area_images = images.filter(item => {
		return item.area == "marszewo";
	});
	console.log(area_images);
	const photos = area_images.map(item => (
		<Item item={item} key={item.id}  />
	));
	return (
		<Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 6 }} gap={15}>
			{photos}
		</Masonry>
	);
};

export default AlbumMarszewo;
