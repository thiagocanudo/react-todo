import { StyleTask } from "./styles";

export function Task(props){

    // console.log(props.onRemove);
    return (
        <>
            <StyleTask>
                <p title={props.title}>{props.tarefa} <sup>{props.id}</sup></p>
                <button onClick={() => props.onRemove(props.id)}>x</button>
            </StyleTask>
        </>
    )
}

// definindo um valor default para a propriedade
// Task.defaultProps = {
//     tarefa: "Sem título"
// }