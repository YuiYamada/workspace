import { FC } from 'react';

export const FileInput: FC = () => {
	console.log("test");
	return (
		<div>
			<p>test</p>
			<input type="file" accept="image/*"/>
		</div>
	);
};
