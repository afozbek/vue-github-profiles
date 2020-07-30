<template>
  <div>
    <p class="info-message">
      Enter the username you want to search and press <b>search button</b>. For
      keyboard press <code>enter</code> after fillin the input
    </p>
    <p class="info-message">
      Here you will list users but if you want to view specific user much more
      detailly, just click card.
    </p>
    <p class="info-message">
      You can toggle <b>dark/light</b> theme in the toggle button top right side
      and after page reload you can still preview the page with your choose
      theme
    </p>
    <p
      class="info-message -author"
      id="authorParagraph"
      tabIndex="0"
      aria-label="Made With Love by Abdullah Furkan Ozbek"
    >
      Made with
      <span role="img" aria-labelledby="authorParagraph"> ❤️</span> by
      <a
        className="o-app__author"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="To Visit Creator's Github Page, please press enter button"
        href="https://github.com/afozbek"
      >
        Abdullah Furkan Özbek
      </a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info-message {
  text-align: justify;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-bottom: 10px;

  &.-author {
    text-align: center;
    margin-top: 0.1rem;

    a {
      text-decoration: none;
      color: #c54646;
    }
  }
}
</style>
