import ReactDOM from "react-dom";
import App from "./App.tsx"

// export const App: React.FC = () => {
//   return (
//     <input type="file" accept='.json'/>
//   );
// }

console.log('a')

ReactDOM.render(
	// Reactコンポーネントをレンダリング
	<App />,
	document.getElementById("root")
);
