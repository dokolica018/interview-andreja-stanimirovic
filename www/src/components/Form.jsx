import React, { useState } from 'react';
import { createTodo } from '../service';

const Form = ({ setTodos }) => {
	const [inputTxt, setInputTxt] = useState('');
	// const [inputSearch, setInputSearch] = useState('')

	return (
		<>
			<div className="">
				<div className="row">
					<form
						className="col s12"
						onSubmit={(e) => {
							e.preventDefault();
							let newTodo = { title: inputTxt, complete: false };
							setInputTxt('');
							createTodo(newTodo).then((res) => {
								setTodos((prev) => [...prev, res.data]);
							});
						}}
					>
						<div className="row">
							<div className="input-field col s6">
								<i className="material-icons prefix">mode_edit</i>
								<textarea
									onChange={(e) => {
										setInputTxt(e.target.value);
									}}
									id="icon_prefix2"
									className="materialize-textarea"
									value={inputTxt}
									placeholder="..."
								/>
								<label htmlFor="icon_prefix2">Add ToDo</label>
								<button className="btn waves-effect waves-light" type="submit" name="action">
									add Todo
									<i className="material-icons right">send</i>
								</button>
							</div>

							{/* <div className="input-field col s6">
                                <i className="material-icons prefix">search</i>
                                <textarea onChange={(e) => {
                                    setInputSearch(e.target.value)
                                    let filtrirane = todos.filter(todo => todo.title.toLowerCase().includes(e.target.value.toLowerCase()))
                                    setTodos(filtrirane)
                                    
                                }} id="icon_prefix2" className="materialize-textarea" value={inputSearch} placeholder="..." />
                                <label htmlFor="icon_prefix2">Search ToDos</label>
                            </div> */}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Form;
