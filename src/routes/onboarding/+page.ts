import {
  generateWallets,
  type WalletInfo,
} from "$lib/functions/walletGenerator"
import type { PageLoad } from "../$types"

export const load: PageLoad = async () => {
  let wallet: WalletInfo | null = null

  async function generateWallet() {
    console.log("generating 2")
    wallet = await generateWallets()
    console.log(wallet)
    return wallet
  }

  return {
    wallet,
    generateWallet,
  }
}
