import { FC } from 'react';

export const FileInput: FC = () => {
	console.log("test");
	return (
		<div>
			<input type="file" accept="image/*"/>
		</div>
	);
};
