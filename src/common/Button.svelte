<script>
  export let statusTrue = false;
</script>

<button 
  on:click 
  class:button--statusTrue={statusTrue}
  class="button" >
  <slot></slot>
</button>

<style>
    .button {
      background: var(--colorCta);
      border: none;
      border-radius: calc(
        (2 * (var(--spacingSmall) * 1.5) + var(--typeLineHeightTight)) / 2
      );
      color: var(--colorFgInverse);
      cursor: pointer;
      display: inline-block;
      font-size: var(--typeSizeSmall);
      font-weight: var(--typeWeightBold);
      line-height: var(--typeLineHeightTight);
      margin: 4px;
      padding: calc(var(--spacingSmall) * 1.5) var(--spacingLarge);
      text-overflow: ellipsis;
      text-transform: uppercase;
      transition: filter 150ms;
      white-space: nowrap;
      width: 250px
    }
    .button:hover,
    .button:focus {
      filter: brightness(115%);
      outline: none;
      text-decoration: none;
    }

    .button--statusTrue{
      background:#23a2f6;
    }
  </style>