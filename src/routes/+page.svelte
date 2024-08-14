<script lang="ts">
  //   import type { LandingPage } from "$lib/types/sanity"
  //   import Metadata from "$lib/components/metadata/Metadata.svelte"
  //   import Listing from "$lib/components/listing/Listing.svelte"

  export let data: {
    home: any
    releases: any[]
  }

  const { home, releases } = data

  console.log("home", home)
  console.log("releases", releases)
</script>

<h1>world affairs</h1>
