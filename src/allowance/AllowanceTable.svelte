<script>
    export let allowances = [];
</script>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Balance</th>
        </tr>
    </thead>
    <tbody>
        {#each allowances as allowance}
            <td>{allowance.firstname} {allowance.lastname}</td>
            <td>${allowance.amount}</td>
        {/each}
    </tbody>
</table>

<style>
table, th, td {
  width: auto;
  
}

table {
    border-collapse: collapse;
}

th, td {
  height: 50px;
  text-align: left;
  padding-right: 25px;
  border-bottom: 1px solid #175c15;
}
</style>
