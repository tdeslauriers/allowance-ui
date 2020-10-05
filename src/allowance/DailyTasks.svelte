<script>
import Button from "../common/Button.svelte";
import { httpGet, httpPut } from "../common/api";
import { onMount } from "svelte";

export let tasks = [];

let today = new Date;
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;


onMount(async _ => {
  const {data} = await httpGet("/task/daily");
  tasks = data;
})

async function updateIsComplete(i) {
    const updateCommand = {
        taskId: tasks[i].taskId,
        updateStatus: !tasks[i].isComplete
    }
    tasks[i].isComplete = updateCommand.updateStatus;
    
    const {ok} = await httpPut('/task/complete', updateCommand);
    if(ok){
      tasks[i].isComplete = updateCommand.updateStatus;
     }

  }

  async function updateIsQuality(i) {
    const updateCommand = {
        taskId: tasks[i].taskId,
        updateStatus: !tasks[i].isQuality
    }
    tasks[i].isQuality = updateCommand.updateStatus;

    const {ok} = await httpPut('/task/quality', updateCommand);
    if(ok){
      tasks[i].isQuality = updateCommand.updateStatus;
     }

  }

</script>

<div class="tasks">
  <h1>todo: <span>{today}</span></h1>
  <ul class="task-list">
      {#each tasks as task, i}
            <li id="{task.id}" class="task">
              <span>
                {task.firstname} - {task.taskTypeName} 
              </span>              
              {#if task.isComplete}
                <Button statusTrue on:click = {() => updateIsComplete(i)}>
                  {task.isComplete ? 'Done' : 'Not Done'}
                </Button>
              {:else}
                <Button on:click = {() => updateIsComplete(i)}>
                  {task.isComplete ? 'Done' : 'Not Done'}
                </Button>
              {/if}
              {#if task.isQuality}
                <Button statusTrue on:click = {() => updateIsQuality(i)}>
                  {task.isQuality ? 'Satisfactory' : 'Unsatisfactory'}
                </Button>
              {:else}
                <Button on:click = {() => updateIsQuality(i)}>
                  {task.isQuality ? 'Satisfactory' : 'Unsatisfactory'}
                </Button>
              {/if}
            </li>

      {/each}
    </ul>
</div>

<style>
  *, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  }
  
  h1 {
    opacity: 50%;
  }


  .tasks{
    margin-top: auto;
    width: max-content;
  }

  .task-list {
  list-style: none;
  margin-bottom: 20px;
  }

  .task {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .task span {
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 10px;
    
  }

</style>
