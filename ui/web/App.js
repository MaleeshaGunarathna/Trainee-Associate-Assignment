import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import { useState } from "react";
import $ from 'https://code.jquery.com/jquery-3.6.0.min.js';
import "./App.css";

//pages
import UserDetailsPage from "./pages/UserDetailsPage";
import LogInPage from "./pages/LogInPage";


function App() {
	// const [name, setName] = useState("");
	// const [result, setResult] = useState("");

	// const handleChange = (e) => {
	// 	setName(e.target.value);
	// };

	// const handleSumbit = (e) => {
	// 	e.preventDefault();
	// 	const form = $(e.target);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: form.attr("action"),
	// 		data: form.serialize(),
	// 		success(data) {
	// 			setResult(data);
	// 		},
	// 	});
	// };

	return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage/>}></Route>
        <Route path="/user" element={<UserDetailsPage/>}></Route>

      </Routes>
    </BrowserRouter>
		// <div className="App">
		// 	<form
		// 		action="http://localhost:8000/Index.php"
		// 		method="post"
		// 		onSubmit={(event) => handleSumbit(event)}
		// 	>
		// 		<label htmlFor="name">Name: </label>
		// 		<input
		// 			type="text"
		// 			id="name"
		// 			name="name"
		// 			value={name}
		// 			onChange={(event) => handleChange(event)}
		// 		/>
		// 		<br />
		// 		<button type="submit">Submit</button>
		// 	</form>
		// 	<h1>{result}</h1>
		// </div>
	);
}

export default App;
