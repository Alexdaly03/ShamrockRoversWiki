<script>
  export let label = 'Search'
  export let value = ''
  export let placeholder = ''
  export let ariaLabel = 'Search'
  export let onInput
</script>

<label class="search-box">
  <span>{label}</span>
  <input
    type="search"
    value={value}
    placeholder={placeholder}
    aria-label={ariaLabel}
    oninput={(event) => onInput(event.currentTarget.value)}
  />
</label>
