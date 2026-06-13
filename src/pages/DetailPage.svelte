<script>
  import PageHero from '../components/PageHero.svelte'
  import TagList from '../components/TagList.svelte'

  export let hero
  export let stats = []
  export let main
  export let side = null
  export let cards = []
  export let onBack
</script>

<PageHero
  variant={hero.variant ?? 'archive'}
  eyebrow={hero.eyebrow}
  title={hero.title}
  intro={hero.intro}
  {stats}
  backLabel={hero.backLabel}
  {onBack}
/>

<section class="detail-section">
  <article class="detail-main">
    <p class="eyebrow">{main.eyebrow}</p>
    <h2>{main.title}</h2>
    <p>{main.text}</p>
  </article>

  {#if side}
    <aside class="detail-side">
      <h3>{side.title}</h3>
      {#if side.tags}
        <TagList tags={side.tags} />
      {:else}
        <p>{side.text}</p>
      {/if}
      {#if side.action}
        <div class="card-actions">
          <button type="button" onclick={side.action.onClick}>{side.action.label}</button>
        </div>
      {/if}
    </aside>
  {/if}

  {#each cards as card}
    <article class="detail-card">
      <h3>{card.title}</h3>
      {#if card.type === 'tags'}
        <TagList tags={card.items} />
      {:else if card.type === 'links'}
        <ul>
          {#each card.items as item}
            <li>
              <a href={item.url} target="_blank" rel="noreferrer">{item.label}</a>
            </li>
          {/each}
        </ul>
      {:else if card.type === 'buttons'}
        {#if card.items.length}
          <div class="linked-list">
            {#each card.items as item}
              <button type="button" onclick={item.onClick}>
                <strong>{item.label}</strong>
                <span>{item.meta}</span>
              </button>
            {/each}
          </div>
        {:else}
          <p>{card.emptyText}</p>
        {/if}
      {:else if card.type === 'years'}
        <div class="year-list">
          {#each card.items as item}
            <span>{item}</span>
          {/each}
        </div>
      {:else}
        <ul>
          {#each card.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}
    </article>
  {/each}
</section>
