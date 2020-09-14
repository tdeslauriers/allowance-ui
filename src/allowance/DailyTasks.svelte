<script>
   export let allowances = [];

</script>

<div class="tasks">
  <h1>todo:</h1>
  <ul class="task-list">
      {#each allowances as allowance}
        {#each allowance.tasktype as tt}
          {#each tt.task as t}
            <li id="{t.id}" class="task">
              <input id="{t.id}" type="checkbox" />
              <label for="{t.id}" class="tick" />
              <span>
                {allowance.firstname} {tt.name} {t.date}
              </span>
            </li>
          {/each}
        {/each}
      {/each}
    </ul>
</div>

<style>
  *, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  }
  
  .tasks{
    margin-top: auto;
  }

  h1{
     color:  #73c8fa;
  }

  .tick{
    width: 30px;
    height: 30px;
    border: 3px solid #333;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .tick::before {
  content: '✓';
  font-size: 20px;
  display: none;
  }
  
  input[type="checkbox"] {
  display: none;
  
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
