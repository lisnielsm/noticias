import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

	// definir la categoria y noticias
	const [ categoria, guardarCategoria ] = useState('');
	const [ noticias, guardarNoticias ] = useState([]);

	useEffect(() => {

		const consultarAPI = async () => {
			const API_KEY = 'c4bd5f83cc1348e98e6478bda8e4d76c';
			const url = `http://newsapi.org/v2/top-headlines?country=cu&category=${categoria}&apiKey=${API_KEY}`;

			const resultado = await fetch(url);
			const noticias = await resultado.json();

			guardarNoticias(noticias.articles);
		};
		consultarAPI();
	}, [categoria]);

	return (
		<Fragment>
			<Header
				titulo='Buscador de Noticias'
			/>

			<div className="container white">
				<Formulario 
					guardarCategoria={guardarCategoria}
				/>

				<ListadoNoticias 
					noticias={noticias}
				/>
			</div>
		</Fragment>
	);
}

export default App;
