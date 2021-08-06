import './Header.css'
export default function Header(props){
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );

}