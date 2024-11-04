import { useEffect, useState } from "react";
import { Task } from "../Task/Task"
import { ContainerList } from "./styles"

export function List(){
    // [estado, função atualizadora] = valor inicial
    
    // const [taskList, setTaskList] = useState([
    //         {titulo: 'Tarefa 1', id: 1},
    //         {titulo: 'Tarefa 2', id: 2},
    // ]);

    let valorStorage = '';
    if(localStorage.getItem('TaskListStorage')){
        valorStorage = JSON.parse(localStorage.getItem('TaskListStorage'));
    }
    else{
        valorStorage = [];
    }

    // const [taskList, setTaskList] = useState(localStorage.getItem('TaskListStorage') ? JSON.parse(localStorage.getItem('TaskListStorage')) : false );    
    const [taskList, setTaskList] = useState(valorStorage);  
    const [newTask, setNewTask] = useState('');

    function addTask(e){
        e.preventDefault();
        
        let idTask = new Date().getTime();

        setTaskList([...taskList, {titulo: newTask, id: idTask}]);
        // console.log(taskList);
        setNewTask('');


        // STRINGIFY de objeto/json para STRING
        // JSON.parse de string para objeto/json
    }

    function removeTask(id){
        // console.log(`tarefa removida ${id}`);

        let novaLista = taskList.filter((item) => {
            if(item.id !== id){
                // mantém
                return true
            }
            else{
                // remove
                return false;
            }
        })

        setTaskList(novaLista)

        // VERSÃO SIMPLIFICADA
        //
        // setTaskList(
        //     taskList.filter(item => (item.id !== id))
        // )
        //
        // FIM VERSÃO SIMPLIFICADA

    }

    useEffect(() => {
        localStorage.setItem('TaskListStorage', JSON.stringify(taskList));
    }, [taskList]);


    

    return (
        <>
            <ContainerList>
                <form onSubmit={addTask}> {/*chama a função no click e no enter */}
                    <input
                        id="inputTarefa"
                        type="text"
                        placeholder="Digite sua tarefa"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={newTask == ""}
                    >Criar</button>
                </form>
                {/* <Task /> */}
                {
                    taskList.map((item) => (
                        <Task tarefa={item.titulo} title={item.titulo} key={item.id} id={item.id} onRemove={removeTask} /*id={item.id}*/ />
                    ))
                }
                {/* <Task tarefa={listagem[0].tarefa} /> */}
            </ContainerList>
        </>
    )
}