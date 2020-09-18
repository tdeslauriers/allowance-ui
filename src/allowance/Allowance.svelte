<script>
  import {onMount} from "svelte";

  import AllowanceTable from './AllowanceTable.svelte';
  import DailyTasks from './DailyTasks.svelte';
  
  import {httpGet} from "../common/api";


  let allowances = [];
  
  onMount(async _ => {
    const {data} = await httpGet("/allowance/all");
    allowances = data;
  })
  </script>

<div>
  <header>
      <span class="preamble">Welcome to</span>
      <h1>Allowance</h1>
  </header>
  
  <p class="greeting">
      This is where you track all allowance balances and activities.
  </p>
  
  <AllowanceTable allowances={allowances} />

  <DailyTasks />
</div>


<style>
  header {
    margin: var(--spacingMedium) 0 var(--spacingLarge) 0;
    text-transform: uppercase;
  }
  .preamble {
    display: block;
  }
  h1 {
    font-size: var(--typeSizeXXLarge);
    font-weight: var(--typeWeightBold);
    line-height: var(--typeLineHeightTight);
  }

  .greeting {
    font-size: var(--typeSizeSmall);
  }
</style>
