# Anotações sobre como usar react e como usar bootstrap e uma API no react

Para poder usar o bootstrap dentro do react é preciso importar os arquivos com esses comandos;
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';

E para poder funcionar é necessário importar os componentes;
    import AppList from "./components/AppList/AppList";
    import Header from "./components/Header/Header";

Por exemplo os componentes acima;
estão dentro de uma pasta chamada components e com nomes com letra maiúscula;

Para poder funcionar o css e os dados inseridos dentro dos componentes tem que usar:
    import './Header.css'; para poder inserir a estilização;
    export default Header para poder mandar o conteúdo para o "App.js"

        const App = () => {
    return (
        <>
        <Header/>
        <AppList/>
        </>
    )
    }
O código acima serve para poder importar os dados dos componentes