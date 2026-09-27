<script>
  export let eyebrow
  export let title
  export let intro
  export let stats = []
  export let variant = 'archive'
  export let backLabel = ''
  export let onBack = null
  export let image = ''
  export let imageAlt = ''
</script>

<section class:players-hero={variant === 'players'} class:archive-hero={variant !== 'players'} class="page-hero">
  <div>
    {#if backLabel && onBack}
      <button class="back-link" type="button" onclick={onBack}>{backLabel}</button>
    {/if}
    <p class="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p class="intro">{intro}</p>
  </div>

  {#if image || stats.length}
    <div class="page-hero-aside">
      {#if image}
        <img
          class="page-hero-photo"
          src={image}
          alt={imageAlt || title}
          onerror={(event) => (event.currentTarget.hidden = true)}
        />
      {/if}
      {#if stats.length}
        <div class="mini-stat-grid" aria-label={`${title} summary`}>
          {#each stats as stat}
            <div>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</section>
