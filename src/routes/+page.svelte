<script lang="ts">
  export let data: {
    home: any
    releases: any[]
  }

  const { home, releases } = data

  // console.log("home", home)
  // console.log("releases", releases)
</script>

<div class="column">
  <!-- LOGO -->
  <!-- <div class="logo">
    <img src="/images/logo.png" alt="World Affairs AB" />
  </div> -->
  <!-- TITLE -->
  <div class="title">
    <h1>World Affairs AB</h1>
  </div>
  <!-- RELEASES -->
  <div class="releases">
    {#each releases as release}
      <div class="release-item">
        <a href={release.link} target="__blank">{release.title}</a>
      </div>
    {/each}
  </div>
  <!-- ABOUT-->
  <div class="about">
    <!-- CEO -->
    <div class="about-section">
      <div class="label">{home.contact.ceoLable}</div>
      <div class="value">{home.contact.ceoName}</div>
    </div>
    <!-- CONTACT -->
    <div class="about-section">
      <div class="label">{home.contact.contactLable}</div>
      <div class="value">
        <a href={`mailto:${home.contact.contactEmail}`}>
          {home.contact.contactEmail}
        </a>
      </div>
      <div class="value">
        <a
          href={`https://www.instagram.com/${home.contact.contactInstagram}`}
          target="_blank"
        >
          @{home.contact.contactInstagram}
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .column {
    text-align: center;
    // .logo {
    //   display: none;
    //   img {
    //     width: 120px;
    //   }
    // }

    .releases {
      margin-bottom: 1em;
    }

    .about {
      font-size: var(--font-size-small);
      font-family: var(--font-stack-mono);

      .about-section {
        margin-bottom: 1em;
        .label {
          font-weight: bold;
        }
      }
    }
  }
</style>
