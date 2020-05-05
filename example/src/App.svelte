<script>
  import Button from "button";

  const onClick = () => {
    alert("I was clicked");
  };
</script>

<h1>Hello World</h1>
<Button on:click={onClick}>Hi</Button>
