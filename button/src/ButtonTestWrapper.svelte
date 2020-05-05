<script>
  import Button from "../src/Button.svelte";

  export let buttonProps = {};
  export let slot = "Button";
</script>

<Button {...buttonProps} on:click>{slot}</Button>
