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
            <td class="balance">${allowance.amount}</td>
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
  border-bottom: 1px solid #222424;
}

td.balance{
  color:#23a2f6;
}
</style>
