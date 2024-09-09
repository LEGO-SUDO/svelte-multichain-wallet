<script lang="ts">
  import type { WalletInfo } from '$lib/functions/walletGenerator'
  import type { PageData } from './$types';
  
  export let data: PageData;

  let isGenerating = false;
  let wallet: WalletInfo | undefined;
  
  async function handleGenerateWallet() {
    console.log("Generating wallet...");
    isGenerating = true;
    try {
      wallet = await data.generateWallet();
      console.log("Generated wallet:", wallet);
    } catch (error) {
      console.error("Error generating wallet:", error);
    } finally {
      isGenerating = false;
    }
  }
</script>

<svelte:head>
 <title>Onboarding</title>
 <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-[#FAFAFA] mb-4">Import Wallet</div>
  <button 
    class="text-[#FAFAFA] py-[12px] px-[20px] rounded-[10px] border-gray-500 border-[1px] mb-4"
    on:click={handleGenerateWallet}
    disabled={isGenerating}
  >
    {isGenerating ? 'Generating...' : 'Generate Wallet'}
  </button>
  
  {#if wallet}
    <div class="mt-4 p-4 bg-gray-800 rounded-lg">
      <h2 class="text-white text-xl font-bold mb-2">Wallet Details:</h2>
      <p class="text-white text-[20px] font-[500] mb-2">Ethereum: {wallet.ethereum}</p>
      <p class="text-white text-[20px] font-[500] mb-2">Solana: {wallet.solana}</p>
      <p class="text-white text-[20px] font-[500] mb-2">Injective: {wallet.injective}</p>
    </div>
  {:else}
    <p class="text-white mt-4">No wallet generated yet.</p>
  {/if}
</section>