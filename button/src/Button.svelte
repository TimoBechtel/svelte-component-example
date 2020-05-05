<script>
  export let primaryColor = "rgb(37, 130, 250)";
  export let fontColor = "white";

  export let primary = false;
  export let disabled = false;
  export let rounded = false;

  const cssVariables = `
  --primaryColor: ${primaryColor};
  --fontColor: ${fontColor};
  `;
</script>

<style>
  button {
    --disabledColor: grey;
    border-radius: 3px;
    padding: 5px 10px;
    background: var(--primaryColor);
    border: 1px solid transparent;
    color: var(--fontColor);
  }
  button:disabled {
    background: var(--disabledColor);
  }
  button.secondary {
    background: transparent;
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);
  }
  button.secondary:disabled {
    border: 1px solid var(--disabledColor);
    color: var(--disabledColor);
  }
  button.rounded {
    border-radius: 20px;
  }
</style>

<button
  {disabled}
  class:secondary={!primary}
  class:rounded
  on:click
  style={cssVariables}>
  <slot />
</button>
